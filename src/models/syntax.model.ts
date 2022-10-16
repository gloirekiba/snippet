import mongoose from "mongoose";

import syntaxSchema from "../schemas/syntax.schema";

const Syntax = mongoose.model("Syntax", syntaxSchema);

export default Syntax;
