import mongoose from "mongoose";

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    clases: {
      type: String,
      required: true,
    },
    DoB: {
      type: Date,
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
    sex: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Student = mongoose.model("Student", studentSchema);
