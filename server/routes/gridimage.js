const express = require("express");

const router = express.Router();
const Gridimage = require("../models/gridimage");


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