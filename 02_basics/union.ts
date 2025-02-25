let score: number | string = 33
score = 44
score = 'srikar'

// can also use union type with our custom defined types

type User = {
    name: string
    isActive: boolean
}

type Admin = {
    adminName: string,
    isActive: boolean
}

let srikar: User | Admin = {
    name: 'srikar',
    isActive: false
}

// WORKING WITH FUNCTIONS : 

function getDbId(id: number | string): number | string {
    return id
}
getDbId(12345);
getDbId('12345')

function getNewDbId(id: number | string) {
    // here implicit checking should be done otherwiese there will be error. Remove the if condition and see the error. here ts is not sure whether id is number or string, so it forces us to check implicitly before doing any operation on the id
    if (typeof id === 'string'){ 
        id.toUpperCase()
        return
    }
    return id+2
}
getNewDbId(12345);
getNewDbId('12345')

// WORKING WITH ARRAYS

let data:( number | string)[] = [1,2, 3, 4, "5"]