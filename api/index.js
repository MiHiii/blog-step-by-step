import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import postRoutes from './routes/post.route.js';
import commentRoutes from './routes/comment.route.js';

import cookieParser from 'cookie-parser';
import path from 'path';

//Để có thể kết nối với môi trường
dotenv.config();

//Kết nối cơ sở dữ liệu
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected!');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());
//Để sử dụng cookie
app.use(cookieParser());

app.listen(3000, () => {
  console.log('Sever is running on port 3000!');
});

//Nếu không có file api riêng thì sẽ viết thế này
// app.get("/test", (req, res) => {
//   res.json({ message: "API is working" });
// });

//Có api riêng routes thay "get" => "use"
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/comment', commentRoutes);

app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
