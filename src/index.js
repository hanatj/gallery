<<<<<<< 16bd60f489d7c3816837e00158fc90fcf3abad30
const app = require('./app');
=======
const app = require('./app').server;
>>>>>>> main structure

app.listen(process.env.PORT || 4000, () => {
  console.log('App running on port', process.env.PORT || 4000);
});
