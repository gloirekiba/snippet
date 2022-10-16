import mongoose from "mongoose";

import ISnippet from "../interfaces/snippet";
import snippetSchema from "../schemas/snippet.schema";

const Snippet = mongoose.model<ISnippet>("Snippet", snippetSchema);

export default Snippet;
