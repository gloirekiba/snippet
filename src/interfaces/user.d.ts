import mongoose from "mongoose";

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  avatar: string;
  website: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  folders: mongoose.Types.ObjectId[];
}

export default IUser;
