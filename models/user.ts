import { DataTypes} from "sequelize";
import { sequelize } from "../db/connect.ts";


export const User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
