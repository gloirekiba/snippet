import mongoose from "mongoose";

export default interface ISnippet extends mongoose.Document {
  title: string;
  owner: mongoose.Types.ObjectI | null;
  content: string;
  hits: number;
  syntax: mongoose.Types.ObjectId | null;
  category: mongoose.Types.ObjectId;
  tags: string[];
  password: string;
  comments: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date | null;
  exposure: string;
  folder: mongoose.Types.ObjectId | null;
  burnAfterReading: boolean;
}
