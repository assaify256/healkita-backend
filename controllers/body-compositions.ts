import type { Request, Response, NextFunction } from "express";
import User from "../models/user.ts";
import BodyData from "../models/body-data.ts";
import BodyMeasurement from "../models/body-measurement.ts";



interface BodyCompositionProps {
    weight: number;
    waist: number;
    hip: number;
    neck: number;
}

export const postBodyCompositionController = (
    req: Request<{}, {}, BodyCompositionProps>,
    res: Response,
    next: NextFunction,
) => {
    if (!req.session.email) {
        return res.status(401).json({ message: "Not authenticated" });
    }
    const email = req.session.email;
    let isMale;
    const weight = req.body.weight;
    const neck = req.body.neck;
    const waist = req.body.waist;
    const hip = req.body.hip;
    User.findOne({
        where: { email: email },
        include: {
            model: BodyData,
        },
    })
        .then((result) => {
            isMale = result?.Body_Datum.isMale
            res.status(201).json({message: "Body composition is created"});

        }).then(() => {
            BodyMeasurement.create({
                weight: weight,
                neck: neck,
                waist: waist,
                hip: hip
            })
        })
        .catch((error) => {
            console.log(error);
        });
    
    // const muscle = measureMuscle();
    // const fat = measureFat();
};
