//Chiedere all'utente di inserire una parola

//creare una funzione

//verificare se la parola è palindroma

/* strumenti

- prompt

- function

- array

- if / else

*/

const userWord = prompt('Scrivi una parola');
console.log(userWord);

const letters = userWord.split('');
console.log(letters);

const reverseLetters = letters.reverse();
console.log(reverseLetters);



function checkPalindromi(lettere) {

    let a = lettere;
    let b = lettere.reverse();
    if (a === b) {
        return true
    } else {
        return false
    }

}


if (checkPalindromi(letters)) {
    console.log('è una parola palindroma');

} else {
    console.log('non è una parola palindroma');
}