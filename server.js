// `` entry point
const fs = require('fs');
const express = require('express');
const path = require('path');
const PORT = process.env.port || 3001;
const notes = require('./db/db.json');

const app = express();

////// Middleware////////
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

///// GET Route for index.html /////
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html')));

///// GET Route for notes.html ///////
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html')));

///// GET API route for /notes should read db.json & return svaed notes as JSON/////
app.get('/api/notes', (req, res) => {
    fs.readfile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.json(JSON.parse(data))
        }
    })
})

//// POST API /api/notes 
app.post('/api/notes', (req, res) => {
    console.log(`${req.method}request received`);

    //// recieve as a new note to save on the req.body 
    const { title, text } = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            Newid: uuid(),
        };
    /* const response ={
        status:'suceess',
        body: newNote,
    } */

        console.log(newNote);}

        fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
                return res.json(JSON.parse(data))
            }})
        fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(newNote))
})
//// readFile one more time before writing or parse it the write it ?
/// and add it to db.json 



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});