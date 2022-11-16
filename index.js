const express = require("express");
const axios = require("axios");

const app = express();

const apiKey = process.env.API_KEY;
const domain = process.env.API_DOMAIN;
const videosUrl = `https://${domain}/videos?api_key=${apiKey}`;

app.get("/", (_req, res) => {
  axios.get(videosUrl).then((response) => {
    console.log(response.data);
  });
  res.send("WELCOME");
});

app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
