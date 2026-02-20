import { DataTypes } from "sequelize";
import { sequelize } from "../db/connect.ts";

const Quotes = sequelize.define("quotes", {
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
});

export default Quotes;
