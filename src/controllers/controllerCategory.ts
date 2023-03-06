import { Request, Response } from "express";
import { Category } from "../models";

const controller = {
  async create(req: Request, res: Response) {
    try {
      const { description } = req.body;
  
      const existingCategory = await Category.findOne({ description });
  
      if (existingCategory) {
        return res.status(400).json({ message: "Category already exists" });
      }
  
      const newCategory = await Category.create({
        description,
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
      const category = await Category.findOne({
        _id: id,
      });
      return res.json(category);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updated = await Category.updateOne(
        {
          _id: id,
        },
        {
          description,
        }
      );
      return res.json({ message: `Category ${description} upateded successfully` });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { description } = req.body;
      await Category.findByIdAndDelete(id);
      return res.json({ message: `Category ${description} deleted successfully` });;
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default controller;
