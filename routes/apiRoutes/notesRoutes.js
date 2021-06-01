const router = require('express').router
const { notes }= require('../../db/db');

router.get('/notes', (req,res) => {
    res.json(notes);
});

router.post('/notes', (req,res) => {
    
});