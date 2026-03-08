import { DataTypes } from "sequelize";
import {sequelize} from "../db/connect.ts";

const BodyData = sequelize.define("Body_Data", {
    height: {
        type: DataTypes.INTEGER(),
        unique: false,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATE(),
        unique: false,
        allowNull: false
    },
    isMale: {
        type: DataTypes.BOOLEAN,
        unique: false,
        allowNull: false
    },
});

export default BodyData;
