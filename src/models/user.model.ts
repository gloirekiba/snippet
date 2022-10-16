import mongoose from "mongoose";
import bcrypt from "bcrypt";

import UserValidator from "../helpers/UserValidator";

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  avatar: string;
  password: string;
  createdAt: Date;
  folders: mongoose.Types.ObjectId[];
  // settings: {
  //   defaultSyntax: string;
  //   defaultExpiration: string;
  //   defaultTheme: string;
  // };
}

const userSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: [true, UserValidator.USERNAME_REQUIRED],
    match: [UserValidator.USERNAME_REGEX, UserValidator.ERR_USERNAME_INVALID],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, UserValidator.EMAIL_REQUIRED],
    match: [UserValidator.EMAIL_REGEX, UserValidator.ERR_EMAIL_INVALID],
  },
  avatar: {
    type: String,
    default: "default.png",
  },
  password: {
    type: String,
    trim: true,
    required: true,
    match: [UserValidator.PASSWORD_REGEX, UserValidator.ERR_PASSWORD_INVALID],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  folders: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Folder",
  },
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password"))
    user.password = await bcrypt.hash(user.password, 10);

  next();
});

const User = mongoose.model<IUser>("User", userSchema);

User.prototype.toJSON = function () {
  const user = this.toObject();
  user.id = user._id;

  delete user._id;
  delete user.__v;
  delete user.password;

  return user;
};

export default User;
