import express from "express";
import path from "path";
import * as url from "url";
import dotenv from "dotenv";
dotenv.config({ path: "server/.env" });

import { addBugReport } from "./bugdb.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const port = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/downloads", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/info", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/support", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/report", (req, res) => {
  try {
    addBugReport(req.query);
    console.log(req.query);
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});