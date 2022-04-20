import { Router } from "express";
import registerApi from "./register";
import loginApi from "./login";
import accessApi from './access'

const router = Router();

router.use("/register", registerApi);
router.use("/login", loginApi);
router.use('/access', accessApi)

export default router;
