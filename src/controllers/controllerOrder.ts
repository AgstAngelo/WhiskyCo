import { Request, Response } from "express";
import { Order } from "../models";

const controller = {
  async create(req: Request, res: Response) {
    try {
      const { userId, orders, amount } = req.body;

      const newOrder = await Order.create({
        userId,
        orders,
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
      path: "category",
      select: "name",
    }); // não sei qual o parametro correto;

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
      const { product } = req.body;
      const updated = await Order.updateOne(
        {
          _id: id,
        },
        {
          product,
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
};

export default controller;
