import { Request, Response } from "express";
import { User } from "../models";
import bcrypt from "bcrypt";
import MESSAGE from "../constants/messages";

const controller = {
  async createAdmin(req: Request, res: Response) {
    try {
      const { name, email, cpf, address, password } = req.body;
      const newPassword = bcrypt.hashSync(password, 8);

      const newAdminUser = await User.create({
        name,
        email,
        cpf,
        address,
        password: newPassword,
        isAdmin: true,
      });

      return res.status(201).json(newAdminUser);
    } catch (err) {
      console.error(err);
      return res.status(500).json(MESSAGE.ERROR.SERVER_ERROR);
    }
  },
  async create(req: Request, res: Response) {
    try {
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
    } catch (err) {
      console.error(err);
      return res.status(500).json(MESSAGE.ERROR.SERVER_ERROR);
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json(MESSAGE.ERROR.SERVER_ERROR);
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        _id: id,
      });
      if (!user) {
        return res.status(404).json(MESSAGE.ERROR.SERVER_ERROR);
    }
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json(MESSAGE.ERROR.SERVER_ERROR);
    }
  },
  async update(req: Request, res: Response) {
    try {
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
    } catch (err) {
      console.error(err);
      return res.status(500).json(MESSAGE.ERROR.SERVER_ERROR);
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if(!user){
        return res.status(404).json({message: "User not found"});
      }
      const { name } = user;
      await User.findByIdAndDelete(id);
      return res.json({ message: `User ${name} deleted successfully`});
    } catch (err) {
      console.error(err);
      return res.status(500).json(MESSAGE.ERROR.SERVER_ERROR);
    }
  },
};

export default controller;
