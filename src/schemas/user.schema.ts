import mongoose from "mongoose";
import bcrypt from "bcrypt";

import { DEFAULT_AVATAR } from "../configs/default";
import IUser from "../interfaces/user";
import UserValidator from "../helpers/UserValidator";

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
    default: DEFAULT_AVATAR,
  },
  website: {
    type: String,
    trim: true,
    match: [UserValidator.WEBSITE_REGEX, UserValidator.ERR_WEBSITE_INVALID],
  },
  password: {
    type: String,
    trim: true,
    required: true,
    match: [UserValidator.PASSWORD_REGEX, UserValidator.ERR_PASSWORD_INVALID],
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now,
  },
  updatedAt: {
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

export default userSchema;
