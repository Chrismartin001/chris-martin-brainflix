const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");
const path = require("path");

let videoList = [];

const grabVideos = () => {
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) {
      console.log(err);
    }
    videoList = JSON.parse(data);
  });
};
grabVideos();

router.get("/:id", (req, res) => {
  const strippedData = videoList.map((video) => {
    return video.id === req.params.id;
  });
  if (strippedData) {
    res.json(strippedData);
  } else {
    res.send("Video not found.");
  }
});

router.post("/", (req, res) => {
  let videos = videoData;
  const { title, description, image } = req.body;
  if (!(title && description && image)) {
    res.status(400).send("Please provide title and description.");
  }

  const newVideo = {
    id: uuidv4(),
    title,
    channel: randomName,
    image: "http",
    description,
    views: 0,
    likes: 0,
    duration: "1:00",
    video,
    timestamp: new Date(),
    comments: [],
  };

  video.push(newVideo);

  fs.writeFile("data/videos");
  if (err) {
    res.status(500).send(err);
  }
  res.status(201).json(newVideo);
});

module.exports = express.Router();
