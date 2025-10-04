import Teacher from "../models/Teacher.js";

const getTeachers = async (req, res) => {
  try {
    const all = req.query.all !== "false";
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const q = {};

    let query = Teacher.find(q)
      .populate("userId", "name email phoneNumber address")
      .populate("teacherPositionsId", "name code")
      .sort({ createdAt: -1 }); 

    if (!all) {
      query = query.skip(skip).limit(limit);
    }

    const teachers = await query.exec();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default getTeachers;