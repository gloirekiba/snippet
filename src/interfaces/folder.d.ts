import mongoose from "mongoose";

interface IFolder extends mongoose.Document {
  name: string;
  user: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  snippets: mongoose.Types.ObjectId[];
}

export default IFolder;
