angular.module('starter.homefeed', [])

  .factory('Home', function() {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var homefeed = [{
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
    }];

    return {
      all: function() {
        return homefeed;
      },
      remove: function(chat) {
        homefeed.splice(homefeed.indexOf(chat), 1);
      },
      get: function(chatId) {
        for (var i = 0; i < homefeed.length; i++) {
          if (homefeed[i].id === parseInt(chatId)) {
            return homefeed[i];
          }
        }
        return null;
      }
    };
  });
