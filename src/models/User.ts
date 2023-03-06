import { Schema, model } from "mongoose";
import { Request } from "express";

interface IUser {
  name: string;
  email: string;
  cpf: string;
  address: string;
  password: string;
  isAdmin: boolean;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    cpf: { type: String, required: true },
    address: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);



const User = model<IUser>("User", userSchema);

export default User;
