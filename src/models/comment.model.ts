import mongoose from "mongoose";

import commentSchema from "../schemas/comment.schema";

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
