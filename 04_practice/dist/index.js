"use strict";
// we should use the same name that we used in the type
// the name "test" should be same because type Greet contains test
// but the argument's name can be different. Here the arg name is message and in type tha arg name is random
const testGreet = {
    test: function (message) {
        console.log('hello world', message);
    }
};
function testGreet_1(message) {
    console.log(`hello world from ${message}`);
    return 'called testGreet_1';
}
testGreet_1('nyc');
const nums_1 = [1, 2, 3, 4];
const nums_2 = [];
nums_2.push(3);
console.log(nums_1);
function pointTest(pt) {
    console.log(`the points are ${pt.x} and ${pt.y}`);
}
pointTest({ x: 5 });
// UNION TYPES: 
// below "variable" can be of type sting or it can be of type number. But be aware while performing operations on them because they may return error
function test_2(variable) {
    if (typeof (variable) == "string") {
        variable.toLowerCase();
    }
    return variable;
}
console.log(test_2('srikar'));
const obj = {
    number: 0,
    string: 'hello world'
};
// This is a genric function which accepts arguments THAT CONTAINS THE PROPERTY "toLowerCase()" to it
// otherwise it rejects the argument by showing error ---->>> see third call in console statement by un-commenting
function find_properties(argument) {
    return argument.toLowerCase();
}
console.log(find_properties('HELLO WORLD'));
console.log(find_properties('HELLO WORLD FROM SRIKAR'));
// console.log(find_properties(121212))
// using multiple generic parameters
function merge(arg_1, arg_2) {
    return Object.assign(Object.assign({}, arg_1), arg_2);
}
console.log(merge({ name: 'srikar' }, { age: 20 }));
let myVariable;
myVariable = 20;
myVariable = "srikar";
let myArray;
let myArray_2;
myArray = [1, 2, 3, 4];
myArray = ['1', '2', '3', '4'];
myArray = ['1', '2', 3, 4];
// myArray_2 = ['1', '2', 3, 4]
// MOVING TOWARDS CLASSES :
class Point {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}
const pointObject = new Point();
pointObject.x = 25;
// pointObject.y = 'srikar'
class PointInitialize {
    constructor() {
        this.x = 25;
        this.y = 50;
    }
}
// CLASSES HAVE STRICT PROPERTY INITIALIZATION RULE
// either they should be initialized while defining the filed or in the constructor
class TestClass {
    constructor(email, user_id, name, db_id, subscribers) {
        this.email = email;
        this.user_id = user_id;
        this.name = name;
        this.db_id = db_id;
        this.subscribers = subscribers;
        console.log(db_id);
    }
    set setDbId(newDbId) {
        this.db_id = newDbId;
    }
    get getDbId() {
        return this.db_id;
    }
}
const test = new TestClass('srikar@gmail.com', 1234, 'srikar', ';laskdjf;lajsdf', 326);
console.log(test.subscribers);
// using protected for getting access in multiple classes : 
class Animal {
    constructor(type, price) {
        this.type = type;
        this.price = price;
    }
}
class Dog extends Animal {
    constructor(type, price, breed) {
        super(type, price);
        this.type = type;
        this.price = price;
        this.breed = breed;
        console.log(this.price);
    }
}
const dog = new Dog('animal', 4500, 'idk');
//# sourceMappingURL=index.js.map