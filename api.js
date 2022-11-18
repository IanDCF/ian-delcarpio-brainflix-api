const axios = require("axios");
require("dotenv").config();

const fs = require("node:fs");

const url = `https://project-2-api.herokuapp.com/videos?api_key=/${process.env.API_KEY}`;

const getVideoList = async () => {
  const { data } = await axios.get(url);
  fs.writeFile(`data/videoList.json`, JSON.stringify(data), (err) => {
    if (err) console.log("Error writing to videoList.json file");
    console.log("videoList.json was created successfully");
  });
  const idList = data.map((element) => element.id);
  return idList;
};

const getVideoDetails = async (idList) => {
  const response = await idList.map(async (id) => {
    const videoDetailsUrl = `https://project-2-api.herokuapp.com/videos/${id}?api_key=/${process.env.API_KEY}`;
    const { data } = await axios.get(videoDetailsUrl);
    return data;
  });
  return response;
};

const storeVideoDetails = async () => {
  const idList = await getVideoList();
  const videoDetails = await getVideoDetails(idList);
  const response = await Promise.all(videoDetails);
  fs.writeFile(`data/videoDetails.json`, JSON.stringify(response), (err) => {
    if (err) console.log("Error writing to videoDetails.json file");
    console.log("videoDetails.json was created successfully");
  });
};

storeVideoDetails();
