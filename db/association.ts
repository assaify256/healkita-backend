import BodyData from "../models/body-data.ts";
import User from "../models/user.ts";

const associate = () => {
    User.hasOne(BodyData, {
        foreignKey: { name: "user_id", allowNull: false },
    });
    BodyData.belongsTo(User);
};

export default associate;
