import mongoose from "mongoose";
import Product from "../models/products.js";
import productList from "./products.js";

const dbUrl =
  process.env.NODE_ENV === "production"
    ? process.env.DB_URL
    : "mongodb://localhost:27017/clothing-world";

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  await Product.deleteMany({});
  for (let products of productList) {
    const prod = new Product(products);
    await prod.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
