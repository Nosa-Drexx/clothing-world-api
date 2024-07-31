import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const app = express();
const PORT = process.env.NODE_ENV === "production" ? process.env.PORT : 5000;

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
