import Sequelize from "sequelize";

// creating a new instance/ schema of the database
export const sequelize = new Sequelize("library_schema", "root", "Cel@1234", {
  dialect: "mysql",
  host: "localhost",
});