let greeting: string = "Hello, World!";
console.log(greeting);

// number

let userId = 1234.56

// boolean

let isLoggedIn: boolean = false

// any

let hero: string;

const getHero = () => {
    return "thor"
}
hero = getHero()

// functions

function addTwo(num: number): number {
    return num+2
}
addTwo(5)

function returnToUpperCase(value: string): string {
    return value.toUpperCase()
}
returnToUpperCase('srikar')

let heros = ['thor', 'spiderman', 'batman']

// here we no need to explicitly provide type annotation while mapping because ts will automatically detect while mapping
// no need to do "hero: string"
// the below annotation specifies the return type of the map function
heros.map((hero): string => {
    return `my hero is ${hero}`
    // return 1 //   THIS WILL BE ERROR BECAUSE WE CANNOT RETURN A NUMBER
})



export {}