/* const fs = require('fs')
const PORT = 3001;

const express = require('express')
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// Function for readFile() to read db.json
// function for readAndAppend() 

// GET API Route for /notes should read db.json 
app.get('/api/notes',(req,res)=> {
res.sendFile(path.join(__dirname, '/public/notes.html'))});
// return saved notes as JSON

// POST API /api/notes 
// recieve as a new note to save on the requestbody 
// and add it to db.json

app.post('/api/notes',(req,res) => {})

   /*  const readFile = fs.readFile('./db.json')
    .then((data) => 
        JSON.parse(data));
    
    const {title, text} = req.body;
    if (req.body){
        const newNote ={
            title,
            text,
            Newid: uuid(),
        };


        fs.writeFile('./db.json',JSON.stringify(readFile)); */
        // res.json()
    
/* 
app.listen(PORT,()=>{
    console.log(`api http://localhost:${PORT}`) 
}); */