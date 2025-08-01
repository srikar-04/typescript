

type Greet = {
    test: (random: string) => void
}

// we should use the same name that we used in the type
// the name "test" should be same because type Greet contains test

// but the argument's name can be different. Here the arg name is message and in type tha arg name is random
const testGreet: Greet = {
    test : function (message: string) {  
        console.log('hello world', message);   
    }
}

function testGreet_1 (message: string) {
    console.log(`hello world from ${message}`);
    return 'called testGreet_1'
}

testGreet_1('nyc')

const nums_1 = [1, 2, 3, 4]

const nums_2: Array<number> = [];

nums_2.push(3)

console.log(nums_1);

// functions using objects
type ObjectTesting = {
    x: number,
    y?: number
}

function pointTest(pt: ObjectTesting) {
    console.log(`the points are ${pt.x} and ${pt.y}`);
}

pointTest({x: 5})

// UNION TYPES: 

// below "variable" can be of type sting or it can be of type number. But be aware while performing operations on them because they may return error
function test_2(
    variable: 
    | string 
    | number
) {
    if (typeof(variable) == "string") {
        variable.toLowerCase()
    }
    return variable
}

console.log(test_2('srikar'))

interface obj {
    number: number,
    string: string
}

const obj = {
    number: 0,
    string: 'hello world'
}

// This is a genric function which accepts arguments THAT CONTAINS THE PROPERTY "toLowerCase()" to it
// otherwise it rejects the argument by showing error ---->>> see third call in console statement by un-commenting
function find_properties<T extends {toLowerCase: () => string}>(argument: T) {
    return argument.toLowerCase()
}

console.log(find_properties('HELLO WORLD'));
console.log(find_properties('HELLO WORLD FROM SRIKAR'));
// console.log(find_properties(121212))


// using multiple generic parameters
function merge<T, U>(arg_1:T, arg_2: U) {
    return {...arg_1, ...arg_2}
}

console.log(merge({name: 'srikar'}, {age: 20}))


let myVariable: number | string;

myVariable = 20
myVariable = "srikar"

let myArray: (number | string)[];

let myArray_2: number[] | string[]

myArray = [1, 2, 3, 4]
myArray = ['1', '2', '3', '4']
myArray = ['1', '2', 3, 4]

// myArray_2 = ['1', '2', 3, 4]