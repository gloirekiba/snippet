import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import express, { Application } from "express";

dotenv.config({ path: path.join(__dirname, "../.env") });

import admin from "./configs/admin.config";
import connectDB from "./db/connectDB";

import adminRouter from "./routes/admin.route";
import userRouter from "./routes/user.route";

connectDB();

const start = async () => {
  const app: Application = express();

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(admin.options.rootPath, adminRouter);
  app.use("/api/user", userRouter);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(` App is running at http://localhost:${PORT} `);
  });
};

start();
