const express = require('express');
const path = require('path');
const routes = require('./controllers/api/v1/index');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const server = require('http').Server(app);
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));
// app.use('/api/v1/', routes);
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});
app.set('port', process.env.PORT || 4000);

module.exports= {
  server
};
