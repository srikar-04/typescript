const superHeros: string[] = ['thor', 'spiderman', 'batman']

superHeros.push('ironman')

// this syntax is same as the above one
const newSuperHeros: Array<string> = []

// we can create custom types [as we discussed earlier] and can create an array for that type

// creating custom type

type User = {
    name: string,
    email: string,
    isActive: boolean
}

// creating an array of User type
const allUsers: User[] = [{name: 'd', email:'d@d.com', isActive: false}]

allUsers.push({
    name: 'srikar',
    email: 'srikar@srikar.com',
    isActive: true
})