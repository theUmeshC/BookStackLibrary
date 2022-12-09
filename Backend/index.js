import express from "express";
import mysql from "mysql2";
import cors from "cors";
import {sequelize} from "./util/database.js";
import { router } from "./Routes/libraryRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Cel@1234",
  database: "library_schema",
});

app.use("/admin", router);

app.get("/getList", (_, res) => {
  const q = " SELECT * FROM new_table";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

sequelize
  .sync()
  .then(() => {
    app.listen(8800, () => {
      console.log("listening to port 8800");
    });
  })
  .catch((err) => {
    console.log(err);
  });
