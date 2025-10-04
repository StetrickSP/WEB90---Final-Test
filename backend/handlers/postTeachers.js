import User from "../models/User.js";
import Teacher from "../models/Teacher.js";

async function generateTeacherCode() {
  let code;
  let exists = true;
  while (exists) {
    code = Math.floor(1000000000 + Math.random() * 9000000000).toString();
    exists = await Teacher.findOne({ code });
  }
  return code;
}

const postTeachers = async (req, res) => {
  try {
    const { name, email, phoneNumber, address, identity, dob, role, isActive, startDate, teacherPositionsId, degrees } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const user = await User.create({ name, email, phoneNumber, address, identity, dob, role: role || "TEACHER" });

    const code = await generateTeacherCode();

    const teacher = await Teacher.create({
      code,
      startDate,
      isActive: isActive ?? true,
      isDeleted: false,
      userId: user._id,
      teacherPositionsId,
      degrees,
    });

    res.json({ user, teacher });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export default postTeachers;