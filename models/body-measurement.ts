import { DataTypes } from "sequelize";
import {sequelize} from "../db/connect.ts";

const BodyMeasurement = sequelize.define("Body_Measurement", {
    weight: {
        type: DataTypes.FLOAT(3,1),
        unique: false,
    },
    neck: {
        type: DataTypes.FLOAT(3,1),
        unique: false,
    },
    hip: {
        type: DataTypes.FLOAT(3,1),
        unique: false,
    },
    waist: {
        type: DataTypes.FLOAT(3,1),
        unique: false,
    },
});

export default BodyMeasurement;
