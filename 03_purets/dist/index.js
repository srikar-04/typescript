"use strict";
// classes in ts
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = ""; // forget modification we cannot even read it or acess it
        this.adress = ''; // classes can also have "readonly"
        this.courseCount = 0; // accessible for current class and all inherited classes
        this.email = email;
        this.name = name;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    set setCourseCount(number) {
        this.courseCount = number;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount(number) {
        this.courseCount = number;
    }
}
const srikar = new User('srikar@srikar.com', 'srikar');
// console.log(srikar.city); // this is give error because it is private
