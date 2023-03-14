import { Schema, model, Types } from "mongoose";

interface IOrder {
    userId: Types.ObjectId;
    products: {
      _id: Types.ObjectId,
      quantity: number
    }[];
    amount: number;
    
  }

const orderSchema = new Schema<IOrder>(
    {
        userId:  { type: Schema.Types.ObjectId, required: true, ref: "User" },
        products: [
          {
            _id: { type: Schema.Types.ObjectId, required: true, ref: "Product" },
            quantity: { type: Number, required: true },
          },
        ],       
        
        amount: { type: Number, required: true },
      },
  {
    timestamps: true,
  }
);

const Order = model<IOrder>("Order", orderSchema);

export default Order;
