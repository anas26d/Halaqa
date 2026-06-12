const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

// API endpoint
app.post("/api/addStudent", (req, res) => {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.status(400).json({ message: "Missing data" });
  }

  res.json({
    message: "Student added successfully",
    student: { name, age }
  });
});

// تشغيل السيرفر على Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});