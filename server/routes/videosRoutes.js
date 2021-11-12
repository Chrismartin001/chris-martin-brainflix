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

router.get("/", (req, res) => {});
