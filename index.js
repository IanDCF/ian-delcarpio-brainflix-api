const express = require("express");
const path = require("node:path");
require("dotenv").config();
const app = express();
const cors = require("cors");
const videoRouter = require("./routes/videos");

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (_req, res) => {
  res.send("WELCOME");
});

app.use("/videos", videoRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
