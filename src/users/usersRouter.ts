import express from "express";
import { signUpUser, signInUser, addToCart } from "./usersController";

const router = express.Router();

router.post(`/signUp`, signUpUser);

router.post(`/signIn`, signInUser);

router.put(`/cart/add`, addToCart);

export default router;
