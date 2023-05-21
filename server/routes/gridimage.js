const express = require("express");
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const router = express.Router();
const multer = require('multer');
const Gridimage = require("../models/gridimage");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://registration:registration@cluster0.sd2bhdx.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

// Initialize GridFS
let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create GridFS storage engine
const storage = new GridFsStorage({
  url:"mongodb+srv://registration:registration@cluster0.sd2bhdx.mongodb.net/?retryWrites=true&w=majority",
  file: (req, file) => {
    return {
      filename: file.originalname,
    };
  },
});
const upload = multer({ storage });

router.post('/gridimage_post', async (req, res) => {
  try {
    const newGridImage = await Gridimage.create(req.body);
    res.status(201).send('User created successfully.');
  } catch (error) {
    res.status(500).send(error.message);
  }
});
// Get all users
router.get("/gridimage_get", async (req, res) => {
  try {
    const users = await Gridimage.find({});
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/users', upload.single('image'), async (req, res) => {
  const { sno, name, description, category } = req.body;

  // Create a new Gridimage document
  const newGridImage = new Gridimage({
    sno,
    image: req.file.filename,
    name,
    description,
    category,
  });

  try {
    // Save the user to the database
    const savedUser = await newGridImage.save();
    res.status(200).json(savedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
















// Get a user by ID
router.get("/users/:id", (req, res) => {
  
  Gridimage.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else if (!user) {
      res.status(404).send("User not found.");
    } else {
      res.send(user);
    }
  });
});

// Update a user by ID
router.put("/users/:id", (req, res) => {
  Gridimage.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else if (!user) {
      res.status(404).send("User not found.");
    } else {
      res.send("User updated successfully.");
    }
  });
});

// Delete a user by ID
router.delete("/users/:id", (req, res) => {
  Gridimage.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else if (!user) {
      res.status(404).send("User not found.");
    } else {
      res.send("User deleted successfully.");
    }
  });
});

module.exports = router;