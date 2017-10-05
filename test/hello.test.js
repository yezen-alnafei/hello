const extractor = require('../src/hello.js');

test('Should return hello', function(){

    expect(extractor()).toEqual('hello');

});