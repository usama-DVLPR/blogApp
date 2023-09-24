const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.send("my name is usama");
});
app.listen(4000, () => {
  console.log("server running on PORT: 4000");
});
