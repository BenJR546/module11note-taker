// server.js

const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid"); // Import uuid

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Async readFile and writeFile functions
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// API ROUTES

// GET /api/notes - Retrieve all notes
app.get("/api/notes", async (req, res) => {
    try {
        const data = await readFileAsync("./db/db.json", "utf8");
        const notes = JSON.parse(data);
        res.json(notes);
    } catch (err) {
        res.status(500).json(err);
    }
});

// POST /api/notes - Create a new note
app.post("/api/notes", async (req, res) => {
    try {
        const data = await readFileAsync("./db/db.json", "utf8");
        const notes = JSON.parse(data);

        const newNote = {
            id: uuidv4(), // Generate a unique ID
            title: req.body.title,
            text: req.body.text,
        };

        notes.push(newNote);
        await writeFileAsync("./db/db.json", JSON.stringify(notes));

        res.json(newNote);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE /api/notes/:id - Delete a note
app.delete("/api/notes/:id", async (req, res) => {
    try {
        const data = await readFileAsync("./db/db.json", "utf8");
        let notes = JSON.parse(data);

        notes = notes.filter((note) => note.id !== req.params.id);

        await writeFileAsync("./db/db.json", JSON.stringify(notes));
        res.json({ message: "Note deleted" });
    } catch (err) {
        res.status(500).json(err);
    }
});

// HTML ROUTES

// GET /notes - Serve notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "notes.html"));
});

// GET * - Serve index.html for all other routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});
