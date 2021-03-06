//l'utente sceglie PARI o DISPARI
//l'utente sceglie un numero da 1 a 5

//generiamo un numero RANDOM da 1 a 5 per il pc

//sommiamo i due numeri

//stabilire se la somma dei due numeri è pari o dispari

//stabilire chi ha vinto


/* strumenti

- prompt (pari o dispari)
- parseInt (prompt () )

- function
- math.floor (math.random () )

- a + b = c

- if
    - c % 2 == 0

- console.log (vincitore)

*/



let userChoice = prompt('Pari o dispari?')
console.log('hai scelto: ', userChoice);

let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))
console.log('hai scelto il numero: ', userNumber);



/**
 *  Ritorna un numero casuale compreso tra due numeri
 *  @param {number} min - valore minimo del numero casuale
 *  @param {number} max - valore massimo del numero cauale
 *  @returns {number} numero casuale 
 */
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let pcNumber = randomNumberGenerator(1, 5)
console.log('il numero del pc è: ', pcNumber);

let sum = userNumber + pcNumber;
console.log('totale: ', sum);


/**
 *  Stabilisce se un numero è pari o dispari
 *  @param {number} numero è il valore da inserire per essere verificato
 * */
function pariDispari(numero) {
    if (numero % 2 == 0) {
        return 'pari'
    } else {
        return 'dispari'
    }
}

if (pariDispari(sum) == userChoice) {
    console.log('Hai vinto');

} else {
    console.log('Hai perso');
}
