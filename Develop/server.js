const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up the public folder as static.
app.use(express.static('public'));

// Setting this to use the notes router in notesRouter.js
app.use('/api/notes', notesRouter)