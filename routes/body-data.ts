import express, { Router } from "express";
import { postBodyData } from "../controllers/body-data.ts";

const bodyDataRouter = express.Router();

const addBodyData = bodyDataRouter.post("/add", postBodyData)

export default bodyDataRouter;


