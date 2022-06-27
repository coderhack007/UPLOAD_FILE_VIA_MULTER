const path = require("path");

const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();
const port = 1000;

app.use(cors());

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./csvFiles");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "--" + file.originalname);
    },
});

app.get("/", (req, res) => {
    console.log("IN GET ROUTE");
    res.sendFile(path.join(__dirname, "index.html"));
});

const upload = multer({storage : fileStorageEngine});

app.post("/single", upload.single("file"), (req, res) => {
    console.log("single route called ::::: ", req.file);
    res.send({
        data: req.file,
        msg: "File uploaded successfully.",
        success: true
    });
});

app.post("/multiple", upload.array("files", 2), (req, res) => {
    console.log("single route called ::::: ", req.files);
    res.send({
        data: req.files,
        msg: "Multiple file uploaded successfully.",
        success: true
    });
});

app.listen(port, () => {
    console.log(`Server connected on PORT : - ${port}`);
});