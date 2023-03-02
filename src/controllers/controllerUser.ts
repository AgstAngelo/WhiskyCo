import { Request, Response } from "express";
import { User } from "../models";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

const controller = {
  async create(req: Request, res: Response) {
    try {
      // Extract the JWT token from the Authorization header
      const authHeader = req.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      const token = authHeader.substring(7);
      // Verify the token using the JWT library and the secret key
      const decoded: any = jwt.verify(token, "whiskyco");
      // Check if the user is an admin
      if (!decoded.isAdmin) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      // Create the new user
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
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async findAll(req: Request, res: Response) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await User.findOne({
        _id: id,
      });
      return res.json(user);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
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
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await User.findByIdAndDelete(id);
      return res.sendStatus(204);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
};

export default controller;
