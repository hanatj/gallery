const app = require('./app');

app.listen(process.env.PORT || 4000, () => {
  console.log('App running on port', process.env.PORT || 4000);
});
