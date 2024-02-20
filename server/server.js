import express from "express";
import path from "path";
import * as url from "url";
import dotenv from "dotenv";
dotenv.config({ path: "server/.env" });

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const port = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});