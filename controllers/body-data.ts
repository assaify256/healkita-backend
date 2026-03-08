import type { NextFunction, Request, Response } from "express";
import User from "../models/user.ts";
import BodyData from "../models/body-data.ts";

interface BodyDataProps {
    height: Number;
    dateOfBirth: Date;
    isMale: Boolean;
}

export const postBodyData = (
    req: Request<{}, {}, BodyDataProps>,
    res: Response,
    next: NextFunction,
) => {
    if (!req.session.email) {
        return res.status(401).json({ message: "Not authenticated" });
    }
    console.log(req.session)
    const height = req.body.height;
    const dateOfBirth = new Date(req.body.dateOfBirth);
    const isMale = req.body.isMale;

    const userEmail = req.session.email;

    User.findOne({ where: { email: userEmail } })
        .then((user) => {
            BodyData.create({
                height: height,
                dateOfBirth: dateOfBirth,
                isMale: isMale,
                user_id: user.id,
            });
        })
        .then((bodyData) => {
            return res.json({ message: "Body Data is Created" });
        })
        .catch((error) => console.log(error));
};
