// file: server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// handlers imports
import getTeachers from "./handlers/getTeachers.js";
import postTeachers from "./handlers/postTeachers.js";
import getTeacherPositions from "./handlers/getTeacherPositions.js";
import postTeacherPositions from "./handlers/postTeacherPositions.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Mongo connect
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error", err));

app.get("/", async (req, res) => {
    res.send("Hello, world!")
})

// GET /teachers
app.get("/teachers", getTeachers);
// POST /teachers
app.post("/teachers", postTeachers);
// GET /teacher-positions
app.get("/teacher-positions", getTeacherPositions)
// POST /teacher-positions
app.post("/teacher-positions", postTeacherPositions);

// Start server
const PORT = process.env.PORT || 3300;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
