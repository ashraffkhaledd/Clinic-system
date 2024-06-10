import {Router} from "express"
import {isValid} from "../../middleware/validation.middleware.js"
import { activateSchema, registerSchema,loginSchema, forgetcodeShema, resetPasswordSchema} from "./patient.validation.js"
import { activateAccount, register,login,sendForgetCode,resetPassword,allPatients, chooseDoctor, patientCreatImage} from "./patient.contorller.js"
import { isAuthenticatedForPatient } from "../../middleware/authentication.middleware.js";
import { isAuthorized } from "../../middleware/authorization.middleware.js";
import { fileUpload } from "../../utils/multer.js";


const router = Router();

//register
router.post("/register",isValid(registerSchema),register);

//activate account
router.get("/confirmEmail/:activationCode",isValid(activateSchema),activateAccount);

//login
router.post("/login",isValid(loginSchema),login);

//send forget password code
router.patch("/forgetCode",isValid(forgetcodeShema),sendForgetCode);


//Reset Passowrd
router.patch("/resetPassword",isValid(resetPasswordSchema),resetPassword);

// get all patients
router.get("/allPatients",allPatients)


// Route to allow a patient to choose a doctor
router.put("/patients/choose-doctor/:doctorId", isAuthenticatedForPatient, isAuthorized("patient"), chooseDoctor);


// patient create an image

// create image
router.post("/image",
isAuthenticatedForPatient,
isAuthorized("patient"),
fileUpload().single("image"),  //form data
patientCreatImage);










export default router