'use strict'
const express = require('express');
const app = express();
const cors = require('cors');

const runner = require('./test-runner');

app.use(cors())
app.use(express.json());


app.get('/hello', function (req, res) {
  const name = req.query.name || 'Guest';
  res.type('txt').send('hello ' + name);
})

app.get('/user', (req, res) => {
  res.json('Hello World')
});

app.listen(3000, ()  => {
  setTimeout(() => {
    try {
      runner.run();
    } catch (e) {
      error = e;
      console.log('Tests are not valid:');
      console.log(error);
    }
  }, 1500);
});
