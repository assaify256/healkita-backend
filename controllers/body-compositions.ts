import type { Request, Response, NextFunction } from "express";
import User from "../models/user.ts";
import BodyData from "../models/body-data.ts";
import BodyMeasurement from "../models/body-measurement.ts";

const measureFat = (isMale, { weight, height, neck, waist, hip }) => {
    if (isMale) {
        const fat =
            495 /
                (1.0324 -
                    0.19077 * Math.log10(waist - neck) +
                    0.15456 * Math.log10(height)) -
            450;
        return fat;
    } else {
        const fat =
            495 /
                (1.29579 -
                    0.35004 * Math.log10(waist + hip - neck) +
                    0.221 * Math.log10(height)) -
            450;
        return fat;
    }
};

const measureMuscle = (isMale, { weight, waist, hip, age, height }) => {
    if (isMale) {
        const muscle =
            39.5 + 0.665 * weight - 0.185 * waist - 0.418 * hip - 0.08 * age;
        return muscle;
    } else {
        const muscle =
            2.98 + 0.255 * weight - 0.175 * hip - 0.038 * age + 0.118 * height;
        return muscle;
    }
};

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
            isMale = result.Body_Datum.isMale
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
