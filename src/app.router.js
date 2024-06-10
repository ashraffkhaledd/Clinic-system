import patientRouter from "./modules/patient/patient.router.js"
import doctorRouter from "./modules/doctor/doctor.router.js"


export const appRouter = (app,express)=>{
    //Global middleware
    app.use(express.json());
    //routes
    //patient
    app.use("/patient",patientRouter);
    //doctor
    app.use("/doctor",doctorRouter);


    //not found page router
    app.all("*",(req,res,next)=>{
        return next(new Error("Page not found!",{cause:404}))});
    
    //global error handler
    app.use((error,req,res,next)=>{
        return res.status(error.cause|| 500).json({success:false, message:error.message, stack:error.stack});
    })    
}