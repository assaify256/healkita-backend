import { DataTypes } from "sequelize";
import sequelize from "../utils/pool.ts";

const User = sequelize.define("user", {
    userName: {
        type: DataTypes.STRING,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
    },
});

export default User;
