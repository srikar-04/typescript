"use strict";
// we should use the same name that we used in the type
// the name "test" should be same because type Greet contains test
// but the argument's name can be different. Here the arg name is message and in type tha arg name is random
const testGreet = {
    test: function (message) {
        console.log('hello world', message);
    }
};
function testGreet_1(message) {
    console.log(`hello world from ${message}`);
    return 'called testGreet_1';
}
testGreet_1('nyc');
//# sourceMappingURL=index.js.map