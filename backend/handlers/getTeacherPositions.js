import TeacherPosition from "../models/TeacherPosition.js";

const getTeacherPositions = async (req, res) => {
  try {
    const positions = await TeacherPosition.find({});
    res.json(positions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export default getTeacherPositions;