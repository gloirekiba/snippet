import mongoose from "mongoose";

export default interface IComment extends mongoose.Document {
  snippet: mongoose.Types.ObjectId;
  owner: mongoose.Types.ObjectId;
  content: string;
  replies: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  likes: mongoose.Types.ObjectId[];
  dislikes: mongoose.Types.ObjectId[];
  syntax: mongoose.Types.ObjectId | null;
}
