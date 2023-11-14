import { Request, Response } from "express";
import { signUpUserService, signInUserService } from "./usersServices";
import emailValidator from "email-validator";
import passwordValidator from "password-validator";

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
    res.status(userSignUpAct ? 200 : 403).json(userSignUpAct ? `Registered user` : `Did not succeed`);
  } catch (err) {
    res.status(403).json(err);
    console.error(err);
  }
};

export const signInUser = async (req: Request, res: Response) => {
  try {
    const validateEmail = emailValidator.validate(req.body.email);
    if (!validateEmail) throw Error(`No validate email`);
    const validatePassword = schema.validate(req.body.password);
    if (!validatePassword) throw Error(`No validate password`);
    const userExistCheck = await signInUserService(req.body);
    res.status(userExistCheck ? 200 : 403).json(userExistCheck ? `User is exist` : `User is not exist`);
  } catch (err) {
    res.status(403).json(err);
    console.error(err);
  }
};
