import { DataTypes } from "sequelize";
import {sequelize} from "../db/connect.ts";

const BodyData = sequelize.define("body-data", {
    height: {
        type: DataTypes.INTEGER({unsigned: true}),
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
