const express = require('express');
const notes = express.Router();
const fs = require("fs");
const { readAndAppend, readFromFile } = require("../helpers/fsUtils");
const { v4: uuidv4 } = require("uuid");

// Get route for the info in db.json
notes.get("/", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

// POST Route for submitting a new note
notes.post("/", (req, res) => {
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (req.body) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "success",
      body: newFeedback,
    };

    res.json(response);
  } else {
    res.json("Error in posting notes");
  }
});

module.exports = notes;
