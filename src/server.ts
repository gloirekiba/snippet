import path from "path";
import dotenv from "dotenv";
import express, { Application } from "express";

dotenv.config({ path: path.join(__dirname, "../.env") });

import connectDB from "./db/connectDB";
import userRouter from "./routes/user.route";
import morgan from "morgan";

const app: Application = express();

app.use(morgan("dev"))
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));


app.use("/api/user", userRouter);


connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
