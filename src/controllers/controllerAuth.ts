import { User } from "../models";
import { Request, Response } from "express";
import { secret } from '../configs/secret';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import MESSAGE from "../constants/messages";

const controller = {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await User.findOne({
      email
    });

    if (!user) {
      return res.status(400).json(MESSAGE.ERROR.EMAIL_ERROR);
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json(MESSAGE.ERROR.PASSWORD_ERROR);
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin
      },
      secret.key
    );

    return res.json({user, token});
  },
};

export default controller;
