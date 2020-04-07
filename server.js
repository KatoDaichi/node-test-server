'use strict';

const express = require('express');
const app = express();
const parser = require('body-parser')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Parser
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// App
app.get('/', (req, res) => {
  res.json({
    message: "Hello,world"
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);