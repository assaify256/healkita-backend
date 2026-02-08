import express, { type Application } from "express";
import { signUpRouter } from "./routes/auth.ts";
import { connectDB, sequelize } from "./db/connect.ts";
import cors from "cors";
import session from "express-session";
import connectSequelize from "connect-session-sequelize";
// Initiate the express package
const app: Application = express();

// Define a used port
const PORT = process.env.PORT || 8080;

// Body Parser
app.use(express.json());
//Headers
app.use(cors());

//Session

const Store = connectSequelize(session.Store)
const store = new Store({db: sequelize});

app.use(
    session({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
        store: store,
        cookie: {
            maxAge: 1000 * 60 * 60,
        },
    }),
);

//Routes
app.use("/api/auth", signUpRouter);

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
