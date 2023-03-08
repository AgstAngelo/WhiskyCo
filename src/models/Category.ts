
import { Schema, model, Types } from "mongoose";

interface ICategory {
  name: string;
  
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    

  },
  {
    timestamps: true,
  }
);

const Category = model<ICategory>("Category", categorySchema);

export default Category;
