var user = require('../user.js');
//req.params.name --> endpoint /users/:name
//req.query.name --> endpoint /users?name=xxx
// console.log(user.occupations);
module.exports = {
  getUser: function() {
    return user;
  },
  getName: function() {
    return user.name
  },
  getLocation: function() {
    return user.location
  },
  getOccupations: function() {
    return user.occupations
  },
  getLastOccupation: function() {
    return user.occupations[user.occupations.length-1]
  },
  getHobbies : function() {
      return user.hobbies
  },
  getHobbiesByType : function(type) {
    return user.hobbies.filter(function(elem) {
      return elem.type == type;
    })
  },
  getFamily: function(params) {
    console.log('family', params);
    var relation = params.relation;
    var gender = params.gender;

    if(relation || gender) {
      user.family.filter(function(elem) {
        return (elem.relation == relation || elem.gender == gender)
      })
    } else {
      return user.family
    }
  },
  getRestaurants: function(params) {
    var rating = params.rating;
    if(rating) {
      return user.restaurants.filter(function(elem) {
        return elem.rating >= rating;
      })
    } else {

      return user.restaurants;
    }
  },
  getRestaurantsByName: function(name) {
// console.log(name);
    return user.restaurants.filter(function(elem) {
      return elem.name == name;
    })
  }
}
