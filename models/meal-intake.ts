import { DataTypes } from "sequelize";
import sequelize from "../utils/pool.ts";

const MealIntake = sequelize.define("meal-intake", {
    cookingMethods: {
        type: DataTypes.STRING,
    },
    saltnessIndex: {
        type: DataTypes.INTEGER,
    },
    sweetyIndex: {
        type: DataTypes.INTEGER,
    },
    wetnessIndex: {
        type: DataTypes.INTEGER,
    }, 
});

export default MealIntake;
