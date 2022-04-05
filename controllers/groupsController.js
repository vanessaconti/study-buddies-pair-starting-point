const express = require("express");

const groups = express.Router();

const {
  getAllGroups,
  getGroup,
  createGroup,
  updateGroup,
} = require("../queries/groups.js");

// Index
groups.get("/", async (req, res) => {
  const allGroups = await getAllGroups();
  if (allGroups[0]) {
    res.status(200).json(allGroups);
  } else {
    res.status(500).json({ error: error });
  }
});

// Create
groups.post("/", async (req, res) => {
  try {
    const newGroup = await createGroup(req.body);
    res.status(200).json(newGroup);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Sample Create data
// {
//   "name": "Physics Pals",
//   "main_focus": "Quantum Computing",
//   "contact_email": "phys_pals@gmail.com"
// }

// Show
groups.get("/:id", async (req, res) => {
  try {
    const oneGroup = await getGroup(req.params.id);
    res.status(200).json(oneGroup);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Edit
groups.put("/:id", async (req, res) => {
  try {
    const updatedGroup = await updateGroup(req.params.id, req.body);
    res.status(200).json(updatedGroup);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = groups;
