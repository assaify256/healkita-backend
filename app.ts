import express, { type Application } from "express";
import { signUpRouter } from "./routes/auth.ts";
import { connectDB, sequelize } from "./db/connect.ts";
import cors from "cors";

// Initiate the express package
const app: Application = express();

// Define a used port
const PORT = process.env.PORT || 8080;

// Body Parser
app.use(express.json());
//Headers
app.use(cors());

//Routes
app.use("/api/auth", signUpRouter);
app.use("/test", (req, res, next) => res.json({ message: "Hi" }));

// Listen to the server

// Connect to DB

connectDB()
    .then(() => {
        return sequelize.sync();
    })
    .then(() => {
        console.log("Database synchronized.");
        app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
    });
