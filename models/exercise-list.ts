import { DataTypes } from "sequelize";
import sequelize from "../utils/pool.ts";

const ExerciseList = sequelize.define("exercise-list", {
    name: {
        type: DataTypes.STRING,
    },
    calorie: {
        type: DataTypes.INTEGER
    }
});

export default ExerciseList;
