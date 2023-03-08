import { Request, Response } from "express";
import { Category } from "../models";
import { Product } from "../models";

const controller = {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;
  
      const existingCategory = await Category.findOne({ name });
  
      if (existingCategory) {
        return res.status(400).json({ message: "Category already exists" });
      }
  
      const newCategory = await Category.create({
        name,
      });
  
      return res.status(201).json(newCategory);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const category = await Category.find();

      return res.json(category);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
  
      const category = await Category.findById(id).lean();
  
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
  
      const products = await Product.find({
        category: category._id,
      }).lean();
  
      return res.json({ category, products });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { name } = req.body;
      await Category.updateOne(
        {
          _id: id,
        },
        {
          name,
        }
      );
      return res.json({ message: `Category ${name} upateded successfully` });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async delete(req: Request, res: Response) {
    try {
        const { id } = req.params;
              
        const { name } = req.body;
        await Category.findByIdAndDelete(id);
        return res.json({ message: `Category ${name} deleted successfully` });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error" });
    }
}
};

export default controller;
