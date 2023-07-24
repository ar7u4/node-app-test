var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello Everyone!!!" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great!, uffff....It works...!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
