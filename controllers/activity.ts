import type { Request, Response, NextFunction } from "express";
import Activity from "../models/activity.ts";

const postActivityController = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const activityNumber = req.body.activityNumber;
    const met = req.body.met;
    const timeSpent = req.body.timeSpent;
    const date = new Date();

    Activity.create({
        activity_number: activityNumber,
        met,
        timeSpent,
        date,
    })
        .then((data) => {
            return res.status(201).json({ message: "Activity is created" });
        })
        .catch((error) => {
            console.log(error);
        });
};
