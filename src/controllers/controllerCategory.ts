import { Request, Response } from "express";
import { Category } from "../models";

const controller = {
  async create(req: Request, res: Response) {
    const { description } = req.body;

    const newPost = await Category.create({
      description,
    });

    return res.status(201).json(newPost);
  },
  async findAll(req: Request, res: Response) {
    const users = await Category.find();

    return res.json(users);
  },
};

export default controller;
