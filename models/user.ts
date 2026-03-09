import { DataTypes, Model, type InferAttributes, type InferCreationAttributes } from "sequelize";
import { sequelize } from "../db/connect.ts";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare userName: string;
    declare nickName: string;
    declare email: string;
    declare password: string;
    declare fullName: string;
}


User.init(
    {
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
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
    },
    { sequelize, modelName: "user" },
);

export default User;