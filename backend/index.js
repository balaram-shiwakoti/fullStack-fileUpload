const express = require("express");
const multer = require("multer");
const path = require("path"); // Import the 'path' module

const cors = require("cors"); // Import the cors middleware
const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + ".png");
    },
  }),
});

// Enable CORS for all routes
app.use(cors());

app.use("/public", express.static(path.join(__dirname, "public")));

app.post("/upload", upload.single("file"), (req, res) => {
  res.json({
    file: `${req.protocol}://${req.get("host")}/public/${req.file.filename}`,
  });
});

app.listen(4000);
