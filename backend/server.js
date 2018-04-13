const express = require('express');
const upload = require('./upload');
const cors = require('cors');

const server = express();

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};

server.use(cors(corsOptions));

server.post('/upload', upload);

server.listen(8200, () => {
    console.log('Server initiated!');
});