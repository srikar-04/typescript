interface User {
    email: string,
    userId: number,
    readonly _id: number,
    google_id?: string,
    startTrail(): string  // this tells us that this is a method that returns a string
}

// we can also add new properties or method to interface by writing it's definition again
interface User {
    github_id?: string  // adding new properties to exsisting interface
}

// can also supports inheritance
interface Admin extends User { // all the values of User are available for admin
    role: string
} 

let srikar: User = {
    email: 'srikar@srikar.com',
    userId: 12345,
    _id: 9879879809,
    startTrail: () => {
        return "free trail started"
    }
}