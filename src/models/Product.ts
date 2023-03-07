import { Schema, model, Types } from "mongoose";

interface IProduct {
    name: string;
    picture: string;
    price: string;
    description: string;
    category: Types.ObjectId;
    brand: Types.ObjectId;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    picture: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, required: true, ref: "Category" },
    brand: { type: Schema.Types.ObjectId, required: true, ref: "Brand" },
  },
  {
    timestamps: true,
  }
);

const Product = model<IProduct>("Product", productSchema);

export default Product;
