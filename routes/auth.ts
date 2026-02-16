import express, { Router } from "express";
import { getCurrentUserController, signInController, signUpController } from "../controllers/auth.ts";



const authRouter: Router = express.Router();

const signUp = authRouter.post(
    "/sign-up",
    signUpController,
);

const signIn = authRouter.post(
    "/sign-in",
    signInController,
);

const getUser = authRouter.get("/me", getCurrentUserController)

export default authRouter




