import { Request, Response } from "express";
import { Brand } from "../models";
import { Product } from "../models";

const controller = {
  async create(req: Request, res: Response) {
    try {
      const { description } = req.body;
  
      const existingBrand = await Brand.findOne({ description });
  
      if (existingBrand) {
        return res.status(400).json({ message: "Brand already exists" });
      }
  
      const newBrand = await Brand.create({
        description,
      });
  
      return res.status(201).json(newBrand);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const brand = await Brand.find();

      return res.json(brand);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
  
      const brand = await Brand.findById(id).lean();
  
      if (!brand) {
        return res.status(404).json({ message: "Brand not found" });
      }
  
      const products = await Product.find({
        brand: brand._id,
      }).lean();
  
      return res.json({ brand, products });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { description } = req.body;
      await Brand.updateOne(
        {
          _id: id,
        },
        {
          description,
        }
      );
      return res.json({ message: `Brand ${description} upateded successfully` });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async delete(req: Request, res: Response) {
    try {
        const { id } = req.params;
              
        const { description } = req.body;
        await Brand.findByIdAndDelete(id);
        return res.json({ message: `Brand ${description} deleted successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
};

export default controller;
