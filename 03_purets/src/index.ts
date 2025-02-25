// classes in ts

class User {
    email: string
    name: string
    city: string = ""
    readonly adress: string = '' // classes can also have "readonly"
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name
    }
}

const srikar = new User('srikar@srikar.com', 'srikar')

console.log(srikar.name);
