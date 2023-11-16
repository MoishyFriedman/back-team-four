import { Request, Response } from "express";
import { signUpUserService, signInUserService } from "./usersServices";
import emailValidator from "email-validator";
import passwordValidator from "password-validator";
import { ICart } from "../types";

const schema = new passwordValidator();

schema
  .is()
  .min(8)
  .is()
  .max(20)
  .has()
  .uppercase()
  .has()
  .lowercase()
  .has()
  .digits()
  .has()
  .not()
  .spaces()
  .has()
  .symbols();

export const signUpUser = async (req: Request, res: Response) => {
  try {
    const validateEmail = emailValidator.validate(req.body.email);
    if (!validateEmail) throw Error(`No validate email`);
    const validatePassword = schema.validate(req.body.password);
    if (!validatePassword) throw Error(`No validate password`);
    const userSignUpAct = await signUpUserService(req.body);
    if (typeof userSignUpAct === `string`) res.status(200).json(userSignUpAct);
    else throw userSignUpAct;
  } catch (err) {
    console.error(err);
    res.status(403).json(err);
  }
};

export const signInUser = async (req: Request, res: Response) => {
  try {
    const validateEmail = emailValidator.validate(req.body.email);
    if (!validateEmail) throw Error(`No validate email`);
    const validatePassword = schema.validate(req.body.password);
    if (!validatePassword) throw Error(`No validate password`);
    const userExistCheck = await signInUserService(req.body);
    if (typeof userExistCheck === `object`)
      res.status(200).json(userExistCheck);
    else throw userExistCheck;
  } catch (err) {
    console.error(err);
    res.status(403).json(err);
  }
};
