import mongoose from "mongoose";
const Schema = mongoose.Schema;

const possibleType = [
  "Bag",
  "Shirt",
  "Trouser",
  "Joggers",
  "Cap",
  "Shoe",
  "Hoody",
  "Short",
  "Jacket",
  "Gown",
];

const possibleCategory = ["Men", "Women"];

const possibleColor = [
  "Red",
  "Green",
  "Blue",
  "White",
  "Brown",
  "Grey",
  "Black",
  "Purple",
  "Silver",
  "Gold",
  "Orange",
  "Pink",
];

const ProductSchema = new Schema({
  id: { type: String, required: false },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: [String], enum: possibleCategory, required: true },
  type: {
    type: String,
    enum: possibleType,
    required: true,
  },
  colors: { type: [String], enum: possibleColor, required: true },
  rating: {
    rate: { type: Number, required: true },
    count: { type: Number, required: true },
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
