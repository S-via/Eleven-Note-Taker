const fs = require('fs')
const express = require('express').Router();
const jsonData = require('./db.json');
const PORT = 3001;
const app = express();

// const util = require ('util')

// Function for readFile 
// function for readAndAppend
///////////////////////////////

// GET API Route for /notes and read db.json 
app.get('/notes',(req,res)=> res.json(jsonData));

// return saved notes as JSON



app.get('/notes',(req,res)=> 
    readFromFile('db/db.json.')).then((data) => res.json(JSON.parse(data)));

// POST API route from notes.html recieve new note and save it to requestbody and add it to db.json
notes.post('/api/notes',(req,res) => {
    console.log(req.body);
    const {} = req.body;
    if (req.body){
        const newNote ={
            title,
            text,
            Newid: uuidv4(),
        };
        readAndAppend(newNote,'db/db.json');
        // res.json()
    }
})
module.exports = notes ;