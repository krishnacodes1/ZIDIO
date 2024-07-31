import { Router } from "express";
import { applicantRegister,login, registerRecruiter } from "../controllers/authController.js";
const router = Router();

router.post('/login',login);
router.post('/applicant/register', applicantRegister);

router.post('/recruiter/register', registerRecruiter);


export default router;