
import { Schema, model, Types } from "mongoose";

interface IBrand {
  description: string;
  
}

const brandSchema = new Schema<IBrand>(
  {
    description: { type: String, required: true },
    

  },
  {
    timestamps: true,
  }
);

const Brand = model<IBrand>("Brand", brandSchema);

export default Brand;
