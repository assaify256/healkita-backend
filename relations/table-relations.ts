import BodyData from "../models/body-data.ts";
import MealIntake from "../models/meal-intake.ts";
import User from "../models/user.ts";

const relate = () => {
    User.hasOne(BodyData);
    //     User.hasMany(BodyMeasurement);

    //     MealIntake.belongsTo(User);
    MealIntake.belongsTo(User, {  targetKey: "userName" });
    //     User.hasMany(MedsIntake);
    //     User.hasMany(ExerciseDone);
};

export default relate;
