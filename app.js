const express = require("express");
const path = require("path");
const config = require("config");
const mongoose = require("mongoose");
const PORT = process.env.port || 5000;
const app = express();

app.use(express.json({ extended: true }));
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/users", require("./routes/data.routes"));

app.use("/", express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client/build/index.html"));
});

async function start() {
  try {
    await mongoose.connect(config.get("mongoURL"), {});
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}...`);
    });
  } catch (error) {
    console.log("Server Error", error.message);
    process.exit(1);
  }
}

start();
