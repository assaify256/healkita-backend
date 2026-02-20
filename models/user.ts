import { DataTypes } from "sequelize";
import { sequelize } from "../db/connect.ts";

const User = sequelize.define("User", {
    email: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: false,
    },
    userName: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    nickName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: false,
    },
    fullName: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false,
    },
});

export default User;