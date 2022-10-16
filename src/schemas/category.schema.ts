import mongoose from "mongoose";

import ICategory from "../interfaces/category";

const categorySchema = new mongoose.Schema<ICategory>({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default categorySchema;
