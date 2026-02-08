import type { NextFunction, Request, Response } from "express";
import { User } from "../models/user.ts";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

export const signUpController = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    //define variables
    const email = req.body.email;
    const password = req.body.password;
    const errors = validationResult(req);
    //check if any email has already existed
    User.findOne({ where: { email: email } })
        .then(() => {
            return bcrypt.hash(password, 12);
        })
        .then((encryptedPassword) => {
            return User.build({ email: email, password: encryptedPassword });
        })
        .then((user) => {
            console.log("User created");
            return res.status(201).json({ message: "User created" });
        })
        .catch((err) => console.log(err));
    //
};
