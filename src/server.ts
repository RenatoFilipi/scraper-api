import dotenv from "dotenv";
import app from "./app";

dotenv.config();

app.listen(process.env.LOCAL, () => {
  console.info("running...");
});
