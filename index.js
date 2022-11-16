const express = require("express");

const app = express();

app.get("/", (_req, res) => {
  res.send("WELCOME");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
