import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../db/connect.ts";

class BodyData extends Model<
    InferAttributes<BodyData>,
    InferCreationAttributes<BodyData>
> {
    declare height: number;
    declare dateOfBirth: string;
    declare isMale: boolean;
}

BodyData.init(
    {
        height: {
            type: DataTypes.INTEGER(),
            unique: false,
            allowNull: false,
        },
        dateOfBirth: {
            type: DataTypes.DATE(),
            unique: false,
            allowNull: false,
        },
        isMale: {
            type: DataTypes.BOOLEAN,
            unique: false,
            allowNull: false,
        },
    },
    { sequelize, modelName: "body_data" },
);

export default BodyData;
