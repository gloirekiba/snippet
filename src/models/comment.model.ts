import mongoose from "mongoose";

import IComment from "../interfaces/comment";
import commentSchema from "../schemas/comment.schema";

const Comment = mongoose.model<IComment>("Comment", commentSchema);

export default Comment;
