export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, password } = req.body;

    res.status(200).json({
      message: "Student added",
      student: { name, password }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}