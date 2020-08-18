 module.exports =  function () {

 var taskRoute = require('../routes/taskRoute.js');

var express = require('express');

const bodyParser = require('body-parser');

const app  =  express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine','ejs');		
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets',express.static('assets'));
app.listen(8091, () => console.log('listening on 8091'));
taskRoute(app);

 }
