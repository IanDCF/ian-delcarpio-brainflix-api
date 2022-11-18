const express = require("express");
const path = require("node:path");
const app = express();

const videoListJSONFile = path.join(__dirname, "./data/videoList.json");
const videoList = require(videoListJSONFile);

const videoDetailsJSONFile = path.join(__dirname, "./data/videoDetails.json");
const videoDetails = require(videoDetailsJSONFile);

console.log(videoDetails);

app.get("/videos", (_req, res) => {
  res.status(200).json(videoList);
});

app.get("/videos/:videoId", (req, res) => {
  const getVideoDetails = (id) => {
    return videoDetails.find((element) => element.id === id);
  };
  res.status(200).json(getVideoDetails(req.params.videoId));
});

app.get("/", (_req, res) => {
  res.send("WELCOME");
});
app.listen(8080, () => {
  console.log("Server is listening on port 8080");
});
