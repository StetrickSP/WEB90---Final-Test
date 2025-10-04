import TeacherPosition from "../models/TeacherPosition.js";

const postTeacherPositions = async (req, res) => {
  try {
    const { name, code, des, isActive } = req.body;

    const existing = await TeacherPosition.findOne({ code });
    if (existing) {
      return res.status(400).json({ error: "Code already exists" });
    }

    const position = await TeacherPosition.create({ name, code, des, isActive });
    res.json(position);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
export default postTeacherPositions;