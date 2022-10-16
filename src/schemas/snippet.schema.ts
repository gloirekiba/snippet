import mongoose from "mongoose";

import ISnippet from "../interfaces/snippet";

const snippetSchema = new mongoose.Schema<ISnippet>({
  title: {
    type: String,
    trim: true,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    default: null,
  },
  content: {
    type: String,
    trim: true,
    required: true,
  },
  hits: {
    type: Number,
    default: 0,
  },
  syntax: {
    type: mongoose.Types.ObjectId,
    ref: "Syntax",
    default: null,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    default: null,
  },
  tags: {
    type: [String],
    trim: true,
    default: [],
  },
  password: {
    type: String,
    trim: true,
    default: null,
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
  expiresAt: {
    type: Date,
    default: null,
  },
  exposure: {
    type: String,
    trim: true,
    default: "public",
    enum: ["public", "unlisted", "private"],
  },
  folder: {
    type: mongoose.Types.ObjectId,
    ref: "Folder",
    default: null,
  },
  burnAfterReading: {
    type: Boolean,
    default: false,
  },
});

snippetSchema.pre("save", function (next) {
  this.updatedAt = new Date();
  next();
});

snippetSchema.virtual("guest").get(function () {
  return this.owner === null;
});

// snippetSchema.virtual("size").get(function () {
//   return new Blob([this.content]).size;
// });

export default snippetSchema;
