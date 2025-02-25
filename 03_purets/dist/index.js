"use strict";
// classes in ts
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const srikar = new User('srikar@srikar.com', 'srikar');
console.log(srikar.name);
