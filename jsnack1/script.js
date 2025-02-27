console.log("Mike's jsnacks")

// jsnack1
// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore.

const numOne = Number(prompt('Inserisci il primo numero'));
const numTwo = Number(prompt('inserisci il secondo numero'));
 if (numOne > numTwo){
    console.log(`${numOne} è il maggiore`);
 } else if (numTwo > numOne) {
    console.log(`${numTwo} è il maggiore`);
 } else {
   console.log(`I numeri sono uguali`);
 }