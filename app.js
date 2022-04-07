// DEPENDENCIES
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Study Buddies App");
});

const groupsController = require("./controllers/groupsController.js");
app.use("/groups", groupsController);

const eventsController = require("./controllers/eventsController.js");
app.use("/events", eventsController);

// EXPORT
module.exports = app;
