const express = require("express");
const PORT = 8080;
const app = express();
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const videosRoutes = require("./routes/videosRoutes");

app.use(cors());

app.use(express.json());
app.use("/videos", videosRoutes);

let videoData = [];

const getVideoData = () => {
  fs.readFile("./data/videos.json", (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    videoData = JSON.parse(data);
  });
};

getVideoData();

app.get("/vidoes", (req, res) => {
  const { title, channel, image, description, views, likes, timestamp } = req.query;
  let videos = videoData;
  if (title) {
    videosRoutes = videos.map((vid) => {
      return {
        title: vid.title,
        channel: vid.channel,
      };
    });
  }
});

// app.use("/", videos);

app.use((req, res, next) => {
  express.static(path.join(__dirname));
  next();
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Express server is up and running on ${PORT}!`);
});
