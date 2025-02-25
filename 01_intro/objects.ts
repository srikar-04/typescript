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

type NewUser = {
    readonly _id: string  // this specifies that we cannot modify the id whenever any user is created using the type NewUser
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number // the question mark tells us that this is an optional filed, not all users have credit card. So ts wont show any error even if we donot give creditcard info for the object created using the type NewUser
}

// creating a user using the type "NewUser"

let user: NewUser = {
    _id: '12345',
    name : 'srikar',
    email: 'srikar@srikar.com',
    isActive: true,
} // see it is not giving me error even if i donot specify the card details


// this gives us error because this is readonly property
// user._id = '097350365'  

// COMBINING TYPES

type cardNumber = {
    cardnumber: string
}
type cardDate = {
    cardDate: string
}
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

const newCardDetails: cardDetails = {
    cardnumber: "12345",
    cardDate: '1/2/23',
    cvv: 123456
}

export {}