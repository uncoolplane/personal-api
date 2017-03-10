var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware.js');
// var controller = require('./controllers/mainCtrl.js');

var app = express();
var port = process.env.PORT || 8887;

app.use(bodyParser.json());
// app.use(middleware.addHeaders);

app.get('/user', middleware.getUser);
app.get('/name', middleware.getName);
app.get('/location', middleware.getLocation);
app.get('/occupations', middleware.getOccupations);
app.get('/occupations/latest', middleware.getLastOccupation);
app.get('/hobbies', middleware.getHobbies);
app.get('/hobbies/:type', middleware.getHobbiesByType);
app.get('/family', middleware.getFamily);
app.get('/restaurants', middleware.getRestaurants);
app.get('/restaurants/:name', middleware.getRestaurantsByName);

app.listen(port, function() {
  console.log('Listening on port ' + port);
})
