import { DataTypes } from "sequelize";
import sequelize from "../utils/pool.ts";

const BodyMeasurement = sequelize.define("body-measurement", {
    date: {
        type: DataTypes.TIME,
    },
    weight: {
        type: DataTypes.FLOAT(undefined, 1),
    },
    neckCircumference: {
        type: DataTypes.FLOAT(undefined, 1),
    },
    waistCircumference: {
        type: DataTypes.FLOAT(undefined, 1),
    },
    hipCircumference: {
        type: DataTypes.FLOAT(undefined, 1),
    },
    wristCicumference: {
        type: DataTypes.FLOAT(undefined, 1),
    },
    forearmCicumference: {
        type: DataTypes.FLOAT(undefined, 1),
    },
});

export default BodyMeasurement;
