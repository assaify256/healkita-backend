import express, { type Application } from "express";
import authRouter from "./routes/auth.ts";
import { connectDB, sequelize } from "./db/connect.ts";
import cors from "cors";
import session from "express-session";
import connectSequelize from "connect-session-sequelize";
import bodyCompositionRouter from "./routes/body-measurement.ts";
import associate from "./db/association.ts";
import bodyDataRouter from "./routes/body-data.ts";

declare module "express-session" {
    interface SessionData {
        email: string | null;
    }
}


// Initiate the express package
const app: Application = express();
const SequelizeStore = connectSequelize(session.Store);
const store = new SequelizeStore({ db: sequelize });

// Define a used port
const PORT = process.env.PORT || 8080;

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    }),
);

app.use(express.json());

// app.use(cookieParser());
app.use(
    session({
        secret: "secret",
        resave: false,
        name: "connect.sid",
        store: store,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            maxAge: 1000 * 60 * 60 * 24,
        },
    }),
);

//Routes
app.use("/api/auth", authRouter);
app.use("/api/body-data", bodyDataRouter);
app.use("/api/body-composition", bodyCompositionRouter);

// Listen to the server

// Connect to DB

// connectDB()
//     .then(() => {
//         return sequelize.sync();
//     }).then(() => {
//         return store.sync();
//     })
//     .then(() => {
//         console.log("Database synchronized.");
//         app.listen(PORT, () => console.log(`Connected to port ${PORT}`));
//     });

async function startServer() {
    try {
        await sequelize.authenticate();
        console.log("Database connected");
        associate();
        await sequelize.sync();
        console.log("Models synced");

        await store.sync();
        console.log("Session table synced");

        app.listen(8080, () => {
            console.log("Server running on port 8080");
        });
    } catch (error) {
        console.error("Startup error:", error);
        process.exit(1);
    }
}

startServer();
