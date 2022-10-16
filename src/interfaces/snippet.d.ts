import mongoose from "mongoose";

export default interface ISnippet extends mongoose.Document {
  title: string;
  category: mongoose.Types.ObjectId;
  tags: string[];
  password: string;
  content: string;
  hits: number;
  comments: mongoose.Types.ObjectId[] | null;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date | null;
  exposure: string;
  folder: mongoose.Types.ObjectId | null;
  owner: mongoose.Types.ObjectI | null;
  syntax: string;
  burnAfterReading: boolean;
}
