const fs = require('fs');
const path = require('path');

app.get('/api/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
      res.json(result);
  });