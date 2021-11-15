const express = require("express");
const router = express.Router();
const fs = require("fs");
const uuid = require("uuid");

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

router.get("/", (req, res) => {
  res.json(videoList);
});

router.get("/:id", (req, res) => {
  const strippedData = videoList.find((video) => {
    return video.id === req.params.id;
  });
  if (!strippedData) {
    res.status(404).send("Video not found");
  }
  res.json(strippedData);
});

router.post("/", (req, res) => {
  let videos = videoData;
  const { title, description, image } = req.body;
  if (!(title && description && image)) {
    res.status(500).send("Please provide title and description.");
  }

  const newVideo = {
    id: uuid.v4(),
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

  videos.push(newVideo);

  fs.writeFile("./data/videos.json", JSON.stringify(strippedData), (err) => {
    if (err) {
      res.status(500).send("Upload was unsuccessful!");
    }
    res.json(strippedData);
  });
});

module.exports = router;
