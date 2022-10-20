import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  avatar: string;
  website: string;
  location: string;
  snippets: mongoose.Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
  folders: mongoose.Types.ObjectId[];
}

export default IUser;
