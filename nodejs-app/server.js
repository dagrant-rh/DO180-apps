var createError = require('html-errors');

var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('DEBUG: Hello World from pod: ' + process.env.HOSTNAME + '\n')
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

