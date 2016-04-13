var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000))

app.get('/', function(req,res) {
    res.send('Hello World!');
});


app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === "hihello") {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port' + app.get('port'));
});

