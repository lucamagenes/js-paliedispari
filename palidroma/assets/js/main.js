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


function checkPalindromi(parola) {

    /* PROCEDURA PER ESTESO
    console.log(parola);
    
    const letters = parola.split('');
    console.log(letters);
    
    const reverseLetters = letters.reverse();
    console.log(reverseLetters.join(''));
     */

    //PROCEDURA ABBREVIATA
    const parolaRovesciata = parola.split('').reverse().join('');
    console.log(parolaRovesciata);

    if (parola == parolaRovesciata) {
        return true
    } else {
        return false
    }
}

if (checkPalindromi(userWord)) {
    console.log('è una parola palindroma');
} else {
    console.log('non è palindroma');
}





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
