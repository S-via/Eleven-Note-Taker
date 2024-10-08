// `` entry point
const fs = require('fs');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const { v4: uuidv4 } = require('uuid');

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

///// GET API route for /notes should read db.json & return saved notes as JSON/////
app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);

            res.json(err)
        } else {
            // respond with the data 
            res.json(JSON.parse(data))
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
            id: uuidv4(),
        };


        console.log(newNote);

        //// readFile one more time before writing // parse it then write it 
        fs.readFile(path.join(__dirname, 'db', 'db.json'), 'utf-8', (err, data) => {
            if (err) {
                console.log(err);


            }
            const writeFileData = JSON.parse(data)
            console.log(writeFileData)
            writeFileData.push(newNote)
            /// and add it to db.json 
            fs.writeFile('db/db.json', JSON.stringify(writeFileData), 'utf-8', (err) => {
                if (err) {
                    // respond to fornt end  with an err
                    res.send(err)
                    console.log('error to write file', err);
                }
                else {
                    // respond to front end with 
                    res.status(200)
                    console.log('file has been written');
                }

            })
        })
    }
})

// FIRST ATEMPT// fs.writeFile(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notes))




app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});