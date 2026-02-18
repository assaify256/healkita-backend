import type { NextFunction, Request, Response } from "express";
import { User } from "../models/user.ts";
import bcrypt from "bcryptjs";

export const signUpController = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    //define variables
    const email = req.body.email;
    const password = req.body.password;
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

export const signInController = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // ✅ Modify session
        req.session.user = email;

        // ✅ Save session and respond ONLY after success
        req.session.save((error) => {
            if (error) {
                console.error("Session save error:", error);
                return res.status(500).json({ error: "Session error" });
            }

            return res.status(200).json({ ok: true, email });
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
};

export const getCurrentUserController = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const currentUser = req.session.user;
    if (!currentUser) {
        return res.status(401).json({ message: "Fetch failed" });
    }
    return res.status(200).json({ user: currentUser });
};
