import {
    DataTypes,
    Model,
    type InferAttributes,
    type InferCreationAttributes,
} from "sequelize";
import { sequelize } from "../db/connect.ts";

class TodoList extends Model<
    InferAttributes<TodoList>,
    InferCreationAttributes<TodoList>
> {
    declare isDone: boolean;
    declare title: string;
    declare description: string;
    declare deadline: string;
}

TodoList.init(
    {
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
            unique: false,
        },
    },
    { sequelize, modelName: "to_do_list" },
);

export default TodoList;
