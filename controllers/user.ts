import type { Request, Response, NextFunction } from "express";
import User from "../models/user.ts";

// const createUser = ({ userName, name }: { userName: string; name: string }) => {
//     return User.create({ name: name, userName: userName })
//         .then((user) => {
//             console.log("User Created");
//         })
//         .catch((error) => console.log(error));
// };

const createUser = (req: Request, res: Response, next: NextFunction) => {
    const { name, userName } = req.body;
    User.create({ name, userName })
        .then((data) => res.send("user created"))
        .catch((error) => console.log(error));
};

const viewAllUser = (req: Request, res: Response, next: NextFunction) => {};

const viewUserById = (req: Request, res: Response, next: NextFunction) => {};

export { createUser, viewAllUser, viewUserById };
