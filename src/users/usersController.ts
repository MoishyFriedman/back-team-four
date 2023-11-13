import { Request, Response } from "express";
import { signUpUserService } from "./usersServices";

export const signUpUser = async (req: Request, res: Response) => {
  try {
    await signUpUserService(req.body);
    res.status(200).json(signUpUserService);
  } catch (err) {
    console.error(err);
  }
};
