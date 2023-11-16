import express from "express";
import {
  signUpUser,
  signInUser,
  addToCart,
  deleteFromCart,
} from "./usersController";

const router = express.Router();

router.post(`/signUp`, signUpUser);

router.post(`/signIn`, signInUser);

router.put(`/cart/add`, addToCart);

router.put(`/cart/delete`, deleteFromCart);

export default router;
