const express = require('express');
const path = require('path');
const routes = require('./controllers/api/v1/index');
const bodyParser = require('body-parser');
<<<<<<< 16bd60f489d7c3816837e00158fc90fcf3abad30
const app = express();
=======
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
>>>>>>> main structure
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const server = require('http').Server(app);
app.use(
  express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));
<<<<<<< 16bd60f489d7c3816837e00158fc90fcf3abad30
// app.use('/api/v1/', routes);
=======
app.use('/api/v1/', routes);
>>>>>>> main structure
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

<<<<<<< 16bd60f489d7c3816837e00158fc90fcf3abad30
module.exports= server;
=======
module.exports= {
  server
};
>>>>>>> main structure
