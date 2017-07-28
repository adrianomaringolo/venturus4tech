var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.listen(3000, function (err) {
    console.log('Server started');
});

var messages = [];

app.get('/', function(request, response){
   response.send('Hello World');
});

app.get('/messages', function(request, response){
   response.send(messages);
});

app.post('/messages', function(request, response){
    var message = request.body;
    messages.push(message);
    response.send(message);
});

