const User = {
    name: 'srikar',
    email: 'srikar@.com',
    isActive: true
}

// passing or returning objects through functions

function createUser({username: string, isPaid: boolean}) {}

createUser({username: 'srikar', isPaid: true})

//function returning an object
function createCourse():{} {
    return {}
}

// using arrow function
const createNewCourse = (): {} => {
    return {}
}

// TYPE ALIASES : 

type User = {
    name: string,
    email: string,
    isActive: boolean
}

// this is like a type created by us. Insted of using string or boolean or number, we can define our own type and use it whereever we want it
function createNewUser(user: User): User {
    return user
}
createNewUser({name: 'srikar', email:'srikar@srikar.com', isActive:true})

export {}