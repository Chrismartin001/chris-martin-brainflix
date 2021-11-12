const express = require("express");
const PORT = 8080;
const app = express();
const fs = require;
const cors = require("cors");
const videos = require("./routes/videosRoutes");

app.use(cors());

app.use(express.json());

const getVideoData = () => {
  fs.readFile(
    "./data/videos.json",
    (error,
    (data) => {
      if (error) {
        console.log(error);
        return;
      }
      videoData = JSON.parse(data);
    })
  );
};

app.get("/vidoes", (req, res) => {
  const { title, channel, image, description, views, likes, timestamp } = req.query;
  let videos = videoData;
  if (title) {
    videos = videos.map((vid) => {
      return {
        title: vid.title,
        channel: vid.channel,
      };
    });
  }
});

app.use("/", videos);

app.use((req, res, next) => {
  express.static(path.join(__dirname, "public"));
  next();
});

app.listen(PORT, () => {
  console.log(`Hi`);
});
