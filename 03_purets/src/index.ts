// classes in ts

class User {
    private city: string = "" // forget modification we cannot even read it or acess it
    readonly adress: string = '' // classes can also have "readonly"
    protected courseCount: number = 0 // accessible for current class and all inherited classes
    constructor(public email: string, public name: string) {
        this.email = email;
        this.name = name
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }
    set setCourseCount(number: number) { // setters donot have any return type annotations
        this.courseCount = number
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(number: number) {
        this.courseCount = number
    }
}

const srikar = new User('srikar@srikar.com', 'srikar')

// console.log(srikar.city); // this is give error because it is private
