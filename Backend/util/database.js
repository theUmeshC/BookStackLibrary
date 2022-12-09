import Sequelize from "sequelize";

export const sequelize = new Sequelize("library_schema", "root", "Cel@1234", {
  dialect: "mysql",
  host: "localhost",
});

