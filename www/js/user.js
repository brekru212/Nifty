angular.module('nifty.user', [])
  .controller('UserController', function() {
    this.name = null;
    this.fbid = null;
    this.address = null;
    this.createUser = function(username, fbid, address) {
      this.name = username;
      this.fbid = fbid;
      this.address = address;
    }
  });

  /** Represents a user of the app, **still need to add fields to this** */
class User {
  constructor(id, fbid, name, location) {
    this.id = id;
    this.fbid = fbid;
    this.name = name;
  }
}

/** Represents a item of clothing */
class Clothing {
  constuctor(id, picture, cost, availability ) {
    this.id = id; // integer
    this.picture = picture; // photo
    this.cost = cost; // integer
    this.availability = availability; // calendar

  }
// number photo number calendar
}
/** Represents a closet that contains clothing */
class Closet {
  constructor(id, clothingList) {
    this.id = id; // integer
    this.clothingList = []; //array or list of Clothing?
  }
}


