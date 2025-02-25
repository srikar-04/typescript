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
function createNewUser(_a) {
    var name = _a.name, email = _a.email, isActive = _a.isActive;
    console.log(name);
}
createNewUser({ name: 'srikar', email: 'srikar@srikar.com', isActive: false });
