import { Request, Response } from "express";

import User from "../models/user.model";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(201).json({ user: user.toJSON(), message: "User created successfully" });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message || "Something went wrong" });
  }

};

