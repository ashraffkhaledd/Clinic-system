import {Router} from "express"
import {isValid} from "../../middleware/validation.middleware.js"
import { doctorActivateSchema, doctorRegisterSchema,doctorLoginSchema,
    doctorForgetcodeShema, doctorResetPasswordSchema,
    createreportSchema} from "./doctor.validation.js"
import { doctorActivateAccount,doctorRegister,doctorLogin,sendForgetCodeForDoctor,resetPasswordForDoctor,
    allDoctor
    , getDoctorHistory,
    ClinicPassword,
    createReport,
} from "./doctor.controller.js"
import { fileUpload} from "../../utils/multer.js";
import { isAuthenticatedForDoctor } from "../../middleware/DOCauthentication.middleware.js";
import { isAuthorizedforDoc } from "../../middleware/DOCauthorization.middleware.js";



const router = Router();

//docotr register
router.post("/register",fileUpload().single("profileImage"),isValid(doctorRegisterSchema),doctorRegister);

//ClinicPassowrd
router.post("/ClinicPassword",ClinicPassword);

//doctor activate account
router.get("/confirmEmail/:activationCode",isValid(doctorActivateSchema),doctorActivateAccount);

//docotr login
router.post("/login",isValid(doctorLoginSchema),doctorLogin);

//send forget password code (for doctor)
router.patch("/forgetCode",isValid(doctorForgetcodeShema),sendForgetCodeForDoctor);


//Reset Passowrd (for doctor)
router.patch("/resetPassword",isValid(doctorResetPasswordSchema),resetPasswordForDoctor);

// get all patients
router.get("/allDoctor",allDoctor)



//doctor's patient history
router.get("/history", isAuthenticatedForDoctor, isAuthorizedforDoc("doctor"),getDoctorHistory);


// create report
router.post("/report",
isAuthenticatedForDoctor,
isAuthorizedforDoc("doctor"),
isValid(createreportSchema),
createReport)





export default router