import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  snippet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Snippet",
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
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
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  dislikes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
  syntax: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Syntax",
    default: null,
  },
});

export default commentSchema;
