import mongoose from "mongoose";

const teacherSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
    },
    clases: {
      type: String,
    },
    nic: {
      type: String,
      unique: true,
    },
    sex: {
      type: String
    }
  },

  {
    timestamps: true,
  }
);

export const Teacher = mongoose.model("Teacher", teacherSchema);
