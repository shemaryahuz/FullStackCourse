import express from "express";
import { config } from "dotenv";

config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});