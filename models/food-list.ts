import { DataTypes } from "sequelize";
import sequelize from "../utils/pool.ts";

const FoodList = sequelize.define("food-list", {
    carb: {
        type: DataTypes.INTEGER,
    },
    fat: {
        type: DataTypes.INTEGER,
    },
    protein: {
        type: DataTypes.INTEGER,
    },
});

export default FoodList;
