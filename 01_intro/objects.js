"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'srikar',
    email: 'srikar@.com',
    isActive: true
};
// passing or returning objects through functions
function createUser(_a) {
    var string = _a.username, boolean = _a.isPaid;
}
createUser({ username: 'srikar', isPaid: true });
//function returning an object
function createCourse() {
    return {};
}
// using arrow function
var createNewCourse = function () {
    return {};
};
// this is like a type created by us. Insted of using string or boolean or number, we can define our own type and use it whereever we want it
function createNewUser(user) {
    return user;
}
createNewUser({ name: 'srikar', email: 'srikar@srikar.com', isActive: true });
// creating a user using the type "NewUser"
var user = {
    _id: '12345',
    name: 'srikar',
    email: 'srikar@srikar.com',
    isActive: true,
}; // see it is not giving me error even if i donot specify the card details
