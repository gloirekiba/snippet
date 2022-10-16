import mongoose from "mongoose";

import ISyntax from "../interfaces/syntax";
import syntaxSchema from "../schemas/syntax.schema";

const Syntax = mongoose.model<ISyntax>("Syntax", syntaxSchema);

export default Syntax;
