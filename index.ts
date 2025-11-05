import express from "express";
import sequelize from "./utils/pool.ts";
import userRouter from "./routes/user.ts";
import User from "./models/user.ts";
import BodyData from "./models/body-data.ts";
import relate from "./relations/table-relations.ts";
// import relate from "./relations/table-relations.ts";

const app = express();
app.use(express.json());

// Routes
// app.use("/api", router);
// app.use("/api/user", createUserRoute);
// app.use("/test", testRouter);

app.use("/api/v1/user", userRouter);

// app.listen(8080, () => console.log("running on port 8080"));
relate();

sequelize
    .sync()
    .then((data) => {
        console.log("connected to DB");
        app.listen(8080, () => console.log("running on port 8080"));
    })
    .catch((error) => console.log(error));
