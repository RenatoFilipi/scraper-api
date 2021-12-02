import express, { Request, Response } from "express";
import animeRouter from "./routes/animeRouter";

const app = express();
app.use(express.json());

//routes
app.use(animeRouter);

export default app;
