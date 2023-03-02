import { Request, Response } from "express";
import { User } from "../models";
import bcrypt from "bcrypt";

const controller = {
  async create(req: Request, res: Response) {
    const { name, email, cpf, address, password, isAdmin } = req.body;
    const newPassword = bcrypt.hashSync(password, 8);

    const newUser = await User.create({
      name,
      email,
      cpf,
      address,
      password: newPassword,
      isAdmin,
    });

    return res.status(201).json(newUser);
  },
  async findAll(req: Request, res: Response) {
    const users = await User.find();

    return res.json(users);
  },
  async findOne(req: Request, res: Response) {
    const { id } = req.params;
    const user = await User.findOne({
      _id: id,
    });

    return res.json(user);
  },
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, email } = req.body;
    const updated = await User.updateOne(
      {
        _id: id,
      },
      {
        name,
        email,
      }
    );

    return res.sendStatus(204);
  },
  async delete(req: Request, res: Response) {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    return res.sendStatus(204);
  },
};

export default controller;
