import mongoose from "mongoose";

import snippetSchema from "../schemas/snippet.schema";

const Snippet = mongoose.model("Snippet", snippetSchema);

export default Snippet;
