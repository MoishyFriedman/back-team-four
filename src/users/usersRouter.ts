import express from "express";
import { signUpUser, signInUser } from "./usersController";

const router = express.Router();

router.post(`/signUp`, signUpUser);

router.post(`/signIn`, signInUser);

export default router;
