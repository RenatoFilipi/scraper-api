import express from "express";
import malRouter from "./routes/animes/malRouter";

const app = express();
app.use(express.json());

//routes
app.use(malRouter);

export default app;
