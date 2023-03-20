'use strict'
const express = require('express');
const app = express();
const cors = require('cors');

const runner = require('./test-runner');
const getAge = require('./utils/getAge');
const getValidEmail = require('./utils/getValideEmail');

app.use(cors())
app.use(express.json());

app.route('/users')
  .get((req, res) => {
    res.json('No users yet')
  })
  .post( (req, res) => {
    if(req.body.email && getValidEmail(req.body.email) === false) return res.status(400).send('email is not valid');
    if(req.body.name === '' || req.body.firtname === '') return res.status(400).send('name and firstName are required');
    if(req.body.birthdate === '') return res.status(400).send('birthdate is required');
    const { birthdate } = req.body;
    const age = getAge(birthdate);
    if (age < 13) {
      return res.status(400).send('You must be 13 years old or older');
    }
    return res.status(200).send('User created')
  });

app.listen(3000, ()  => {
  console.log("Listening on port " + 3000);
  console.log('Running Tests...');  
  setTimeout(() => {
    try {
      runner.run();
    } catch (e) {
      console.log('Tests are not valid:');
      console.log(e);
    }
  }, 1500);
});

module.exports = app; // for testing