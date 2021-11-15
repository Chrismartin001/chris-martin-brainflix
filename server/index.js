const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const path = require("path");
const videosRoutes = require("./routes/videosRoutes");
const morgan = require("morgan");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/videos", videosRoutes);

app.use((req, res, next) => {
  express.static(path.join(__dirname, "public"));
  next();
});

app.listen(PORT, () => {
  console.log(`Express server is up and running on ${PORT}!`);
});
