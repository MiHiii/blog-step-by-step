import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    //Không trùng tên đăng nhập
    username: {
      type: String,
      required: true,
      unique: true,
    },

    //Không trùng email
    email: {
      type: String,
      required: true,
      unique: true,
    },

    //Có thể trùng pass
    password: {
      type: String,
      required: true,
    },
  },
  //Tạo thuộc tính createdAt và updatedAt
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

export default User;
