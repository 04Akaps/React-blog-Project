import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// https://www.mongodb.com/cloud.atlas

const CONNECTION_URL =
  "mongodb+srv://hojinProject:hojinProject123@cluster0.8fr9y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`서버가 ${PORT}에서 실행 되었습니다.`))
  )
  .catch((error) => console.log(`${error} did not connect`));
