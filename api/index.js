import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

//Để có thể kết nối với môi trường
dotenv.config();

//Kết nối cơ sở dữ liệu
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("Sever is running on port 3000!");
});
