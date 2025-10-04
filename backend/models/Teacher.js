import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  startDate: Date,
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  teacherPositionsId: [{ type: mongoose.Schema.Types.ObjectId, ref: "TeacherPosition" }],
  degrees: [
    {
      type: { type: String },
      school: String,
      major: String,
      year: Number,
      isGraduated: Boolean,
    },
  ],
}, {timestamps: true});

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;