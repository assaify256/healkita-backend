import express, { Router } from "express";
import {
    getCurrentUserController,
    signInController,
    signOutController,
    signUpController,
} from "../controllers/auth.ts";

const authRouter: Router = express.Router();

const signUp = authRouter.post("/sign-up", signUpController);

const signIn = authRouter.post("/sign-in", signInController);

const getUser = authRouter.get("/me", getCurrentUserController);

const signOut = authRouter.post("/sign-out", signOutController);

export default authRouter;
