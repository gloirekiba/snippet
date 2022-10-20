import mongoose from "mongoose";

import IFolder from "../interfaces/folder";

const folderSchema = new mongoose.Schema<IFolder>({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
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
  snippets: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Snippet",
  },
});

export default folderSchema;
