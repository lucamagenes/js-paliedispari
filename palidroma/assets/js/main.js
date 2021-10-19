//Chiedere all'utente di inserire una parola

//creare una funzione

//verificare se la parola è palindroma

/* strumenti

- prompt

- function

- array

- if / else

*/

let userWord = prompt('Scrivi una parola');
console.log(userWord);

const letters = userWord.split('');
console.log(letters);



function checkPalindromi(parola) {

    return parola === parola.reverse();

}

const reverseLetters = checkPalindromi(letters)
console.log(reverseLetters);



/*
var checkWord = letters.length == reverseLetters.length && letters.every(function (element, index) {
    return element === reverseLetters[index];
});

console.log(checkWord);


var array1 = ['c', 'i', 'a', 'o'];
console.log(array1);
var array2 = ['c', 'a', 'i', 'o'];
console.log(array2);

var is_same = array1.length == array2.length && array1.every(function (element, index) {
    return element === array2[index];
});

console.log(is_same);
*/
