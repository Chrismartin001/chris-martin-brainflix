const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

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
  const { title, description, image } = req.body;

  const newVideo = {
    title,
    channel: "randomName",
    image,
    description,
    views: "954",
    likes: "503",
    duration: "1:00",
    video: "http://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [
      {
        name: "Joe Rogan",
        comment: "Woah awesome dude, do a kickflip bro.",
        likes: 561,
        timestamp: 1628522461150,
      },
    ],
    id: uniqid(),
  };

  videoList.push(newVideo);

  fs.writeFile("./data/videos.json", JSON.stringify(videoList), (err) => {
    if (err) {
      res.status(500).send("Upload was unsuccessful!");
    }
    res.json(videoList);
  });
});

module.exports = router;
