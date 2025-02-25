abstract class TakePhoto {
    // we cannot create instances of abstract class
    // we can just declare function and must and the definition of that function should be written in the extended class
    constructor(
        public cameraMode: string,
        public filter: string 
    ){}
    abstract getSepia(): void // function is just declared but it's definition is written in the extended class
}

class Instagram extends TakePhoto {
    constructor(
        // super key is mandatory for classes extended from abstract classes
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log('sepia')
    }
}

// can create instances extended abstract classes
const user = new Instagram('test', 'test', 2)