import express, { json } from "express";
import morgan from "morgan";
import usersRouter from "./users/usersRouter";

const app = express();

app.use(morgan(`tiny`));
app.use(json);
app.use(`/users`, usersRouter);

app.listen(5080, () => console.log(`Server is running`));
