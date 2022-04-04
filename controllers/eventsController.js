const express = require("express");

const events = express.Router();

// Index
events.get("/", async (req, res) => {
  try {
    res.status(200).json("ok");
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Create
events.get("/:id", async (req, res) => {
  try {
    res.status(200).json("ok");
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Show
events.get("/:id", async (req, res) => {
  try {
    res.status(200).json("ok");
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Edit
events.get("/:id", async (req, res) => {
  try {
    res.status(200).json("ok");
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = events;
