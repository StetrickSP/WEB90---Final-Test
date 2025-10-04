import mongoose from "mongoose";

const teacherPositionSchema = new mongoose.Schema({
  code: { type: String, unique: true },
  des: String,
  isActive: { type: Boolean, default: true },
  isDeleted: { type: Boolean, default: false },
  name: String,
}, {timestamps: true});

const TeacherPosition = mongoose.model("TeacherPosition", teacherPositionSchema);
export default TeacherPosition;