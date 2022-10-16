import mongoose from "mongoose";

const syntaxSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  extension: {
    type: String,
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

export default syntaxSchema;
