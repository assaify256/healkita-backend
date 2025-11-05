import express from "express";
import { createUser, viewAllUser, viewUserById } from "../controllers/user.ts";
import MealIntake from "../models/meal-intake.ts";

const userRouter = express.Router();

// GET all users list
userRouter.get("/", viewAllUser);

// GET specific user
userRouter.get("/", viewUserById);

// POST new user
userRouter.post("/create", createUser);

// GET

userRouter.get("/:id/categories/food", (req, res) => {
    const id = req.params.id;
    MealIntake.findAll({ where: { userId: id } })
        .then((mealIntake) => {
            res.send(`Returned from id ${id}`);
        })
        .catch((error) => res.send(error).status(404));
});
userRouter.get("/:id/categories/drink", () => {});
userRouter.get("/:id/categories/exercise", () => {});
userRouter.get("/:id/categories/medicine", () => {});
userRouter.get("/:id/categories/body-data", () => {});

export default userRouter;
