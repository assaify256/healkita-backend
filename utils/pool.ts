import { Sequelize } from "sequelize";


const DB_NAME = process.env.DB_NAME || "";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_USERNAME = process.env.DB_USERNAME || "";
const HOST = process.env.HOST || "";

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: HOST,
    dialect: "mysql",
});

export default sequelize;
