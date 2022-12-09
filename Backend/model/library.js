import Sequelize from "sequelize";
import { sequelize } from "../util/database.js";

export const Library = sequelize.define("library", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  publishDate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
