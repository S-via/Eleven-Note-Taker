const fs = require('fs')
const PORT = 3001;

const express = require('express')
const app = express();
const path = require('path');
// const util = require ('util')

// Function for readFile() to read db.json
// function for readAndAppend() 

app.use(express.static('public'));
// GET API Route for /notes and read db.json 
app.get('/api/notes',(req,res)=> {
    res.sendFile(path.join(__dirname, '/db.db.json'))});

// return saved notes as JSON

app.use('/api/notes',(req,res)=> 
    readFromFile('/db.db.json')).then((data) => res.json(JSON.parse(data))); 

// POST API /api/notes 
// recieve new note and save it to requestbody 
// and add it to db.json

/* app.post('/api/notes',(req,res) => {
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
module.exports = notes ; */

app.listen(PORT,()=>{
    console.log(`api http://localhost:${PORT}`)
});