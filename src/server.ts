import express, { json } from "express";
import morgan from "morgan";
import cors from "cors"
import usersRouter from "./users/usersRouter";

const app = express(); 

app.use(cors())
app.use(morgan(`tiny`));
app.use(express.json());
app.use(`/users`, usersRouter);

app.listen(5080, () => console.log(`Server is running`));
