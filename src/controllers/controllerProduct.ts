import { Request, Response } from "express";
import { Product } from "../models";
import MESSAGE from "../constants/messages";


const controller = {
  async create(req: Request, res: Response) {
    const { name, picture, price, description, category, brand} = req.body;
    
    const newProduct = await Product.create({
        name,
        picture,
        price,
        description,
        category,
        brand,
    });

    return res.status(201).json(newProduct);
  },
  async findAll(req: Request, res: Response) {
    try {
    const products = await Product.find().populate({
      path: "category",
      select: "name",
    })
    .populate({
      path: "brand",
      select: "name",
    });

    return res.json(products);
    } catch (error) {
    console.error(error);
    return res.status(500).json(MESSAGE.ERROR.SERVER_ERROR);
    }
    },

  async find(req: Request, res: Response) {
    try {
      const { name } = req.params;
      const product = await Product.find({ name: { $regex: `.*${name}.*`, $options: "i" } });

      if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }
      return res.json(product);
    } catch (err) {
      console.error(err);
      return res.status(500).json(MESSAGE.ERROR.SERVER_ERROR);
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name, picture, price, description, category, brand } = req.body;
      
      await Product.updateOne(
        {
          _id: id,
        },
        {
        name,
        picture,
        price,
        description,
        category,
        brand
        }
      );
      
      return res.json({ message: `Product ${name} updated successfully` });
    } catch (err) {
      console.error(err);
      return res.status(500).json(MESSAGE.ERROR.SERVER_ERROR);
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await Product.findByIdAndDelete(id);
      return res.json({ message: `Product ${name} deleted successfully` });;
    } catch (err) {
      console.error(err);
      return res.status(500).json(MESSAGE.ERROR.SERVER_ERROR);
    }
  },
};

export default controller;