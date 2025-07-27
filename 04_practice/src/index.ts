

type Greet = {
    test: (random: string) => void
}

// we should use the same name that we used in the type
// the name "test" should be same because type Greet contains test

// but the argument's name can be different. Here the arg name is message and in type tha arg name is random
const testGreet: Greet = {
    test : function (message: string) {  
        console.log('hello world', message);   
    }
}

function testGreet_1 (message: string) {
    console.log(`hello world from ${message}`);
    return 'called testGreet_1'
}

testGreet_1('nyc')