
import { Schema, model } from "mongoose";

interface ICategory {
  description: string;
}

const categorySchema = new Schema<ICategory>(
  {
    description: { type: String, required: true },
    
  },
  {
    timestamps: true,
  }
);

const Category = model<ICategory>("Category", categorySchema);

export default Category;
