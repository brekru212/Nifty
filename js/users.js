/**
 * Created by Muigai on 6/11/2016.
 */
/** Represents a User Object */
//function niftyUser(username, age, shape, height, locale) {
//    this.username = username;
//    this.age = age;
//    this.shape = shape;
//    this.height = height;
//    this.locale = locale;
//}

// OR //

var niftyUser = new Object();
var niftyBoutique = new Object();

niftyUser = {
    id: "", // the user's database id (int)
    fbid: "", // the user's fb id (int)
    name: "", // the user's fb name (string)
    age: "", // the user's input age (int)
    location: localStorage.setItem(), // the user's input location (string)
    closet: "" // dictionary?
    // need to ask Shivi/Brett about database set up
}


