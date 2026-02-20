import { DataTypes } from "sequelize";
import { sequelize } from "../db/connect.ts";


const ToDoList = sequelize.define("to-do-list", {
    isDone: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: false,
    },
    description: {
        type: DataTypes.STRING(300),
        allowNull: true,
        unique: false,
    },
    deadline: {
        type: DataTypes.DATE(),
        allowNull: true,
        unique: false
    },

})

export default ToDoList;