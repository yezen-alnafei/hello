const helloWorld = require('../src/hello.js');

test('Should return hello', function(){

    expect(helloWorld()).toEqual('Hello World');

});