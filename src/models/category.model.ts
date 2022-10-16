import mongoose from "mongoose";

import ICategory from "../interfaces/category";
import categorySchema from "../schemas/category.schema";

const Category = mongoose.model<ICategory>("Category", categorySchema);

export default Category;
