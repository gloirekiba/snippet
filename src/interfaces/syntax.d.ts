import mongoose from "mongoose";

export default interface ISyntax extends mongoose.Document {
  name: string;
  extension: string;
  createdAt: Date;
  updatedAt: Date;
}
