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

export {}

