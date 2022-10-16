import mongoose from "mongoose";

import IUser from "../interfaces/user";
import userSchema from "../schemas/user.schema";

const User = mongoose.model<IUser>("User", userSchema);

// User.prototype.toJSON = function () {
//   const user = this.toObject();
//   user.id = user._id;

//   delete user._id;
//   delete user.__v;
//   delete user.password;

//   return user;
// };

export default User;
