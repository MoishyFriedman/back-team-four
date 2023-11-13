import express, { json } from "express";
import morgan from "morgan";
import usersRouter from "./users/usersRouter";
import { config } from "./config";
import { connectionToDB } from "./connectionToDB";

const app = express();

app.use(morgan(`tiny`));
app.use(express.json());
app.use(`/users`, usersRouter);

app.listen(config.server.port, () => {
  console.log(`Server is running on ${config.server.port}`);
  connectionToDB();
});
