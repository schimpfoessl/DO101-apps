var express = require('express');
const name=process.env.name;
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/mars', function (req, res) {
  res.send('Hello Mars!\n');
});

app.get('/foo', function (req, res) {
  res.send('Hello Foo! '+name+'\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

