
const notes = requier('express')
const fs = require('fs')
// const util = require ('util')

// Function for readFile 
// function for readAndAppend

notes.get('/notes',(req,res)=> 
readFromFile('db/db.json.')).then((data) => res.json(JSON.parse(data)));

notes.post('/',(req,res) => {
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