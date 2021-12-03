const express = require("express");
const mongoose = require("mongoose");
const api = require("./routes/index.js");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.get("/exercise", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/exercise.html"))
);

// routes
app.use("/api", api);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
