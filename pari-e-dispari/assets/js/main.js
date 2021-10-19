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
console.log(userChoice);

let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'))
console.log(userNumber);



/**
 *  Ritorna un numero casuale compreso tra 1 e 5
 *  @param {number} min - valore minimo del numero casuale
 *  @param {number} max - valore massimo del numero cauale
 *  @returns {number} numero casuale 
 */
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min - 4)) + min;
}

