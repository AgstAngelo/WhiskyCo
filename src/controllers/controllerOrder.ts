import { Request, Response } from "express";
import { Order } from "../models";
import tokenUserId from "../middlewares/tokenUserId";

const controller = {
  async create(req: Request, res: Response) {
    try {
      const { userId, products, amount } = req.body;

      const newOrder = await Order.create({
        userId,
        products,
        amount,
      });
      return res.status(201).json(newOrder);

    } catch (err) {
      console.log(err);
      return res.status(401).json(err);
    }
  },
  async findAll(req: Request, res: Response) {
    const orders = await Order.find().populate({
      path: "userId",
      select: "name",
    })
    .populate({
      path: "products",
      select: "name",
    });

    return res.json(orders);
  },
  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const order = await Order.findOne({
        _id: id,
      });
      return res.json(order);
    } catch (err) {
      console.error(err);
      return res.status(401).json({ message: "No order found" });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { userId, products, amount } = req.body;
      const updated = await Order.updateOne(
        {
          _id: id,
        },
        {
          userId,
          products,
          amount,
        }
      );
      return res.json({ message: `order upateded successfully` });
    } catch (err) {
      console.error(err);
      return res.status(401).json({ message: "No order found" });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await Order.findByIdAndDelete(id);
      return res.json({ message: `Order deleted successfully` });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ message: "No order found" });
    }
  },
  async getOrders(req: Request, res: Response) {
    try {
      
      const userId = tokenUserId(req);
      console.log(userId);
      if (!userId) {
        return res.status(401).json({ message: 'Missing token' });
      }
      const orders = await Order.find({ userId: userId }).populate("products");

      return res.status(200).json(orders);
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  },
};

export default controller;
