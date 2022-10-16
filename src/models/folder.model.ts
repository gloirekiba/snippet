import mongoose from "mongoose";

import IFolder from "../interfaces/folder";
import folderSchema from "../schemas/folder.schema";

const Folder = mongoose.model<IFolder>("Folder", folderSchema);

export default Folder;
