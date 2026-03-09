import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../db/connect.ts";

class Quotes extends Model<
    InferAttributes<Quotes>,
    InferCreationAttributes<Quotes>
> {
    declare content: string;
    declare person: string;
    declare year: string;
}

Quotes.init(
    {
        content: {
            type: DataTypes.STRING(100),
            unique: false,
            allowNull: false,
        },
        person: {
            type: DataTypes.STRING(50),
            unique: false,
            allowNull: true,
        },
        year: {
            type: DataTypes.STRING(10),
            unique: false,
            allowNull: true,
        },
    },
    { sequelize, modelName: "quotes" },
);

export default Quotes;
