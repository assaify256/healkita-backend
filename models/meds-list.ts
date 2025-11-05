import { DataTypes } from "sequelize";
import sequelize from "../utils/pool.ts";

const MedsIntake = sequelize.define("meds-intake", {
    name: {
        type: DataTypes.FLOAT(undefined, 1),
    },
    time: {
        type: DataTypes.TIME
    },
});

export default MedsIntake;
