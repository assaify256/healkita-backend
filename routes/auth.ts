import express, { Router } from "express";
import { signInController, signUpController } from "../controllers/auth.ts";
import { body } from "express-validator";

const router: Router = express.Router();

export const signUpRouter = router.post(
    "/sign-up",
    signUpController,
);

export const signInRouter = router.post(
    "/sign-in",
    signInController,
);
