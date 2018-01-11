const http = require('http');
const push = require('./push');
const express = require('express');
const app = express();

app.use('/', express.static('public'));

app.post('/subscribe', (req, res) => {
  let body = [];

  req.on('data', chunk => body.push(chunk)).on('end', () => {
    let subscription = JSON.parse(body.toString());
    push.addSubscription(subscription);
    res.end('Subscribed');
  });
});

app.post('/push', (req, res) => {
  let body = [];

  req.on('data', chunk => body.push(chunk)).on('end', () => {
    push.broadcast(body.toString());
    res.end('Sent');
  });
});

app.get('/key', (req, res) => {
  res.end(push.getKey());
});

app.listen(3333, () => console.log('Server listening on port 3333!'));
