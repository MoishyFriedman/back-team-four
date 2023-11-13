import express from "express";
import { signUpUser } from "./usersController";

const router = express.Router();

router.post(`/signUp`, signUpUser);

export default router;
