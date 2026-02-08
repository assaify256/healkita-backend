import type { NextFunction, Request, Response } from "express";
import { User } from "../models/user.ts";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import { where } from "sequelize";

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
        //check existing email, if it is new, next
        .then(() => {
            //hash the password
            return bcrypt.hash(password, 12);
        })
        .then((encryptedPassword) => {
            // create new user that is saved in db
            return User.create({ email: email, password: encryptedPassword });
        })
        .then((user) => {
            // response and log
            console.log("User created");
            return res.status(201).json({ message: "User created" });
        })
        .catch((err) => console.log(err));
    //
};

export const signInController = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    // try to sign in
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ where: { email: email } })
        .then((user) => {
            bcrypt.compare(password, user.password);
        })
        .then((user) => {
            
            req.session.email = email;
            return req.session.save((err) => {
                console.log(err);
                console.log("Authenticated");
                res.status(200).json({ user: { email: email } });
            });
        })
        .catch((err) => console.log(err));
    // create a session
    // return a cookie
};
