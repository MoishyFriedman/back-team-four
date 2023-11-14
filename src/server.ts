import express, { json } from "express";
import morgan from "morgan";
import cors from "cors"
import usersRouter from "./users/usersRouter";
import { config } from "./config";
import { connectionToDB } from "./connectionToDB";

const app = express(); 

app.use(cors())
app.use(morgan(`tiny`));
app.use(express.json());
app.use(`/users`, usersRouter);

app.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}`);
  connectionToDB();
});
