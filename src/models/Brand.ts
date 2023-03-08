
import { Schema, model } from "mongoose";

interface IBrand {
  name: string;
  
}

const brandSchema = new Schema<IBrand>(
  {
    name: { type: String, required: true },
    

  },
  {
    timestamps: true,
  }
);

const Brand = model<IBrand>("Brand", brandSchema);

export default Brand;
