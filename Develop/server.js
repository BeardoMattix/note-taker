const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up the public folder as static.
app.use(express.static('public'));

// Setting this to use the notes router in notesRouter.js
app.use('/api/notes', notesRouter)

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
// Get route for the notes page
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🤘🏻`)
);