const express = require("express");
const path = require("node:path");
const router = express.Router();

const { uuid, writeJSONFile } = require("../helper/helper");

const videoDetailsJSONFile = path.join(__dirname, "../data/videoDetails.json");
const videoDetails = require(videoDetailsJSONFile);

router.get("/", (_req, res) => {
  res.status(200).json(videoDetails);
});

router.get("/:videoId", (req, res) => {
  const getVideoDetails = (id) => {
    return videoDetails.find((element) => element.id === id);
  };
  res.status(200).json(getVideoDetails(req.params.videoId));
});

router.post("/post", (req, res) => {
  const {
    title,
    description,
    channel,
    views,
    likes,
    timestamp,
    image,
    comments,
  } = req.body;

  if (title === "" || description === "") {
    return res
      .status(400)
      .json({ error: "Please provide title and description" });
  }

  const newObj = {
    id: uuid(),
    title,
    channel,
    views,
    likes,
    timestamp,
    description,
    image,
    comments,
  };

  videoDetails.push(newObj);

  writeJSONFile(videoDetailsJSONFile, videoDetails);

  res.status(201).json(newObj);
});

module.exports = router;
