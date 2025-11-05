import { DataTypes } from "sequelize";
import sequelize from "../utils/pool.ts";

const MedsIntake = sequelize.define("meds-intake", {
    dosage: {
        type: DataTypes.FLOAT(undefined, 1),
    },
    time: {
        type: DataTypes.TIME
    },
    sideEffects: {
        type: DataTypes.ARRAY
    }
});

export default MedsIntake;
