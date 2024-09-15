// `` entry point
const fs = require('fs');
const express = require('express');
const path = require('path');
const PORT = process.env.port || 3001;
const notes = require('db/db.json');

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
    fs.readfile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.json(JSON.parse(data))
        }
    })})

//// POST API /api/notes 
app.post('/api/notes',(req,res) => {
   console.log(`${req.method}request received`);
   const newNote = req.body;
   if (title && text){
    const newNote = {
        title,
        text,
        Newid: uuid(),
    };
    const response ={
        status:'suceess',
        body: newNote,
    };
    console.log(response);
   }

})
// recieve as a new note to save on the req.body 
/// and add it to db.json 
 fs.writeFile('db.json', JSON.stringify(newNote))



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});