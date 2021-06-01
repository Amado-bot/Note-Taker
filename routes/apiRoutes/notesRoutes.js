const router = require('express').router
const {
    notes
} = require('../../db/db');

// return all notes
router.get('/notes', (req, res) => {
    res.json(notes);
});

// return notes by id
app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    res.json(result);
});

//create note
app.post('/notes', (req, res) => {
    // adds new note to notes array
    notesArray.push(note)

    // saves notes array to db.json
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    );
});