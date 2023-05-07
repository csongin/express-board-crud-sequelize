import "./env.js";
import "./config/database.js";
import express from "express";
import cors from "cors";
import logger from "morgan";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
