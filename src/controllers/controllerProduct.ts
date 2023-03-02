import { Request, Response } from "express";
import { Product } from "../models";

const controller = {
  async create(req: Request, res: Response) {
    const { name, picture, price, description, category } = req.body;

    const newProduct = await Product.create({
        name,
        picture,
        price,
        description,
        category,
    });

    return res.status(201).json(newProduct);
  },
  async findAll(req: Request, res: Response) {
    const products = await Product.find().populate({
      path: "category",
      select: "description",
    });

    return res.json(products);
  },
};

export default controller;
