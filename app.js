import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose";
import { readdirSync } from "fs";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

//Mongo DB config
const dbUrl =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : "mongodb://localhost:27017/clothing-world";

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("error", (e) => console.log(`connection error: ${e}`));
db.once("open", () => {
  console.log(`
=======================================
        Database connected
=======================================
    `);
});

// app (expresss) config
const app = express();
const PORT = process.env.NODE_ENV === "production" ? process.env.PORT : 5000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

//read file and map through all the routes
readdirSync("./routes").map(async (routefileName) => {
  const route = await import(`./routes/${routefileName}`);
  app.use("/", route.router);
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
