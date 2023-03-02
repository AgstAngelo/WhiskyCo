import { Schema, model } from "mongoose";

interface IOrder {
    userId: string;
    products: [];
    amount: number;
    
  }

const orderSchema = new Schema<IOrder>(
    {
        userId: { type: String, required: true },
        products: [
          {
            productId: {
              type: String,
            },
            quantity: {
              type: Number,
              default: 1,
            },
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
