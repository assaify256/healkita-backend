import express, { Router } from "express";
import { postBodyCompositionController } from "../controllers/body-compositions.ts";

const bodyCompositionRouter: Router = express.Router();

const measureBody = bodyCompositionRouter.post(
    "/measure",
    postBodyCompositionController,
);

export default bodyCompositionRouter;