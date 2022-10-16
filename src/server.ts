import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import express, { Application } from "express";

dotenv.config({ path: path.join(__dirname, "../.env") });

import connectDB from "./db/connectDB";
import userRouter from "./routes/user.route";

connectDB();

const start = async () => {
  const app: Application = express();

  const admin = new AdminJS({
    databases: [],
    rootPath: "/admin",
  });

  const adminRouter = AdminJSExpress.buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  app.use(morgan("dev"));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, "public")));
  app.use(express.urlencoded({ extended: false }));

  app.use("/api/user", userRouter);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(` App is running at http://localhost:${PORT} `);
  });
};

start();
