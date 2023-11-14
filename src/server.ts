import express, { json } from "express";
import morgan from "morgan";
import cors from "cors"
import usersRouter from "./users/usersRouter";
import productsRouter from "./products/productsRouter";
import { config } from "./config";
import { connectionToDB } from "./connectionToDB";
<<<<<<< HEAD
import cors from "cors";
const app = express();
=======

const app = express(); 
>>>>>>> 8a4b16c51e922e6fa8b6b4798c142076885ba61a

app.use(cors());
app.use(morgan(`tiny`));
app.use(express.json());
app.use(`/users`, usersRouter);
app.use(`/products`, productsRouter);

app.listen(config.server.port, () => {
  console.log(`Server is running on port ${config.server.port}`);
  connectionToDB();
});
