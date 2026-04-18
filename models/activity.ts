import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../db/connect.ts";

class Activity extends Model<
    InferAttributes<Activity>,
    InferCreationAttributes<Activity>
> {
    declare activity_number: string;
    declare met: number;
    declare timeSpent: number;
    declare date: Date;
}

Activity.init(
    {
        activity_number: {
            type: DataTypes.STRING,
        },
        met: {
            type: DataTypes.STRING,
        },
        timeSpent: {
            type: DataTypes.NUMBER,
        },
        date: {
            type: DataTypes.DATE,
        },
    },
    { sequelize, modelName: "activity" },
);

export default Activity;