import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";
import bcrypt from "bcryptjs";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://chaosrider870:fK8rmguOcvNCq0TY@cluster0.g9bzzhx.mongodb.net/recipe-db?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    console.log("DB connected...")
  )

app.listen(3001, () => console.log("Server started"));
