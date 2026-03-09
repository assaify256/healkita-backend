import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../db/connect.ts";

class BodyMeasurement extends Model<
    InferAttributes<BodyMeasurement>,
    InferCreationAttributes<BodyMeasurement>
> {
    declare weight: number;
    declare neck: number;
    declare hip: number;
    declare waist: number;
}

BodyMeasurement.init(
    {
        weight: {
            type: DataTypes.FLOAT(3, 1),
            unique: false,
        },
        neck: {
            type: DataTypes.FLOAT(3, 1),
            unique: false,
        },
        hip: {
            type: DataTypes.FLOAT(3, 1),
            unique: false,
        },
        waist: {
            type: DataTypes.FLOAT(3, 1),
            unique: false,
        },
    },
    { sequelize, modelName: "body_measurement" },
);

export default BodyMeasurement;
