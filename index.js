const express = require('express');
const app = express()
const db = require('./db');
const port = 3000;

app.listen(port);

console.log('listening on port', port);