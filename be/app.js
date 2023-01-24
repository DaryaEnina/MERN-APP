const express = require("express");
const path = require("path");
const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.port || 5000;
const app = express();

const whitelist = [
  "https://backend-production-bc92.up.railway.app",
  "https://mern-app-development.up.railway.app",
  "http://localhost:5000",
  "http://localhost:3000",
];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
const corsOptions = {
  origin: "https://mern-app-client.onrender.com/",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  mode: "no-cors",
};
// app.use(cors(corsOptions));

app.use(express.json({ extended: true }), cors(corsOptions));
app.use("/api/auth", cors(corsOptions), require("./routes/auth.routes"));
app.use("/api/users", cors(corsOptions), require("./routes/data.routes"));

// app.use("/", express.static(path.join(__dirname, "/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "/build/index.html"));
// });

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
