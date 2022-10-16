import mongoose from "mongoose";

import IFolder from "../interfaces/folder";

const folderSchema = new mongoose.Schema<IFolder>({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  snippets: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Snippet",
  },
});

export default folderSchema;
