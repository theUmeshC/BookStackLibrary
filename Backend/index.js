import express from "express";
import cors from "cors";
import {sequelize} from "./util/database.js";
import { router } from "./Routes/libraryRoutes.js";

// initializing express
const app = express();

// middleware for Cross-Origin Resource Sharing 
app.use(cors());

// middleware to parses incoming requests with JSON payloads and is based on body-parser
app.use(express.json());

//middleware handling request from /admin/.. routes
app.use("/admin", router);

//syncing database runs only once the server is started
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
