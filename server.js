// `` entry point
const express = require('express');
const path = require('path');
const PORT = process.env.port || 3001;
const api = require('public/index.js');
const app = express();

app.use('/api', api);

// Route for index.html
app.get('/',(req,res) =>
    res.sendFile(path.join(__dirname,'public/index.html')));

// Route for notes.html
app.get('/notes',(req,res)=>
res.sendFile(path.join(__dirname,'public/notes.html')));

// 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);});