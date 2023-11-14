import express, { json } from "express";
import morgan from "morgan";
import usersRouter from "./users/usersRouter";
import productsRouter from "./products/productsRouter";
import { config } from "./config";
import { connectionToDB } from "./connectionToDB";
import cors from "cors";
const app = express();

app.use(cors());
app.use(morgan(`tiny`));
app.use(express.json());
app.use(`/users`, usersRouter);
app.use(`/products`, productsRouter);

app.listen(config.server.port, () => {
  console.log(`Server is running on ${config.server.port}`);
  connectionToDB();
});
