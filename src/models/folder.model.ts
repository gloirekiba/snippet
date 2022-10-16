import mongoose from "mongoose";

interface IFolder extends mongoose.Document {
  name: string;
  user: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  snippets: mongoose.Types.ObjectId[];
}

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

const Folder = mongoose.model<IFolder>("Folder", folderSchema);

export default Folder;
