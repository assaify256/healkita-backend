import { DataTypes } from "sequelize";
import sequelize from "../utils/pool.ts";

const ExerciseDone = sequelize.define("exercise-done", {
    time: {
        type: DataTypes.TIME,
    },
    intensity: {
        type: DataTypes.INTEGER,
    },
});

export default ExerciseDone;