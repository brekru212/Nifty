angular.module('starter.home', [])

  .factory('Home', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var home = [{
      id: 0,
      name: 'Shivi Singh',
      dressname: 'Blue Velvet Dress',
      dressimg: 'img/bluevelvetdress.jpg',
      price: '20',
      face: 'img/shivi.jpg'
    }, {
      id: 1,
      name: 'Shivi Singh2',
      dressname: 'Blue Velvet Dress',
      dressimg: 'img/bluevelvetdress.jpg',
      price: '15',
      face: 'img/shivi.jpg'
    }, {
        id: 2,
        name: 'Shivi Singh3',
        dressname: 'Blue Velvet Dress',
        dressimg: 'img/bluevelvetdress.jpg',
        price: '20',
        face: 'img/shivi.jpg'
      }, {
        id: 3,
        name: 'Shivi User4',
        dressname: 'Blue Velvet Dress',
        dressimg: 'img/bluevelvetdress.jpg',
        price: '20',
        face: 'img/shivi.jpg'
      }];

    return {
      all: function() {
        return home;
      },
      remove: function(homeObj) {
        home.splice(home.indexOf(homeObj), 1);
      },
      get: function(homeId) {
        for (var i = 0; i < home.length; i++) {
          if (home[i].id === parseInt(homeId)) {
            return home[i];
          }
        }
        return null;
      }
    };
  });
