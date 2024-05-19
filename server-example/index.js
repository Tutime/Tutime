const express = require('express');
const app = express();

//methods

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)

});

// requirements of todo api

