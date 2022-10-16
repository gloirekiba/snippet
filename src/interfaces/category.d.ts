import mongoose from "mongoose";

export default interface ICategory extends mongoose.Document {
  name: string;
  createdAt: Date;
  updatedAt: Date;
}
