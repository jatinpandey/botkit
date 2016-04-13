var express = require('express');
var app = express();

app.get('/webhook', function (req, res) {
  if (req.query['hub.verify_token'] === "hihello") {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');    
  }
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

