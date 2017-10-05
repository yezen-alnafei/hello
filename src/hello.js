// function printHello(){  
//     return 'Hello World';
// }

function uselessHelloWorld(){
    var word = '';
    let letters = ['H','e','l','l','o',' ','W','o','r','l','d'];
    letters.forEach(function(letter){
        word +=letter;
    });

    return word;
}

module.exports = uselessHelloWorld;
