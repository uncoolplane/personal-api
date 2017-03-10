var controller = require('../controllers/mainCtrl.js');

// console.log(controller);
module.exports = {
  addHeaders: function(req, res, next) {
      res.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST, PUT',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        'X-XSS-Protection': '1; mode=block',
        'X-Frame-Options': 'SAMEORIGIN',
        'Content-Security-Policy': "default-src 'self' devmountain.github.io"
      });

    next();
  },
  getUser: function(req, res, next) {
    console.log(controller.getUser());
    res.send(
      controller.getUser()
    )
  },
  getName: function(req, res, next) {
    console.log('getName', req);
    res.send(
      controller.getName()
    )
  },
  getLocation: function(req, res, next) {
    res.send(
      controller.getLocation()
    )
  },
  getOccupations: function(req, res, next) {
    res.send(
      controller.getOccupations()
    )
  },
  getLastOccupation: function(req, res, next) {
    res.send(
      controller.getLastOccupation()
    )
  },
  getHobbies : function(req, res, next) {
    res.send(
      controller.getHobbies()
    )
  },
  getHobbiesByType : function(req, res, next) {
    var type = req.params.type;
    var hobbies = controller.getHobbiesByType(type);
    res.send(
      hobbies
    )
  },
  getFamily: function(req, res, next) {
    res.send(
      controller.getFamily(req.query)
    )
  },
  getRestaurants: function(req, res, next) {
    res.send(
      controller.getRestaurants(req.query)
    )
  },
  getRestaurantsByName: function(req, res, next) {
    var name = req.params.name;
    var restaurants = controller.getRestaurantsByName(name);
    res.send(
      restaurants
    )
  }
}
