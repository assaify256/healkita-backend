import { DataTypes } from "sequelize";
import sequelize from "../utils/pool.ts";

const BodyData = sequelize.define("body-data", {
    height: {
        type: DataTypes.INTEGER,
    },
    dateOfBirth: {
        type: DataTypes.DATE,
    },
    sex: {
        type: DataTypes.BOOLEAN,
    },
});

export default BodyData;
