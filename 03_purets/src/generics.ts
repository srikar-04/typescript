const score: number[] = []
const name: string[] = []

function identityOne(value: boolean | number): boolean | number {
    return value
}

function identityTwo(value: any): any {
    return value
}

// if you give the value type as number then the return type automatically becomes number which is not the case when we are using any in identityTwo

// in identity two both the value and return type are any and the most important part is they are not interconnected. We can take "any" value say string and can also return "any" value say a number.

// But if we give the value type as number then the return type automatically becomes number which is not the case when we are using any in identityTwo
function identityThree<Type>(value: Type): Type{
    return value
}

identityThree<string>('srikar')

// this is the another way of writing generics
// it need not to be always Type it can be any letter or variable

function identityFour<T>(value: T): T {
    return value
}

// we can define our own type or interface and use it in generics

interface Bootle {
    name: string,
    price: number
}

identityFour<Bootle>({
    name: 'srikar',
    price: 100
})

// GENERICS IN ARRAY AND ARROW FUNCTION

function getSearchProducts<T>(products: T[]) : T {
    return products[0]
}

// converting above function to arrow function

const getMoreSearchProducts = <T>(products: T[]): T => {
    return products[3]
}

// working with "in" operator

interface User {
    name: string,
    email: string
}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
    if("isAdmin" in account) {
        return account.isAdmin
    }
}

// instanceOf keyword
function logValue(x: Date | string) {
    // instance of is used whenever there is a scope to use new keyword, like "new Date()"
    if(x instanceof Date) {
        console.log(x.toUTCString());
    } else {
        x.toUpperCase()
    }
}



export {}

