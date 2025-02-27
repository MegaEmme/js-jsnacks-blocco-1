console.log("Mike's jsnacks")

// jsnack2
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const wordOne = prompt('Inserisci parola uno');
;
const wordTwo = prompt('Inserisci parola due');

if (wordOne.length > wordTwo.length) {
    console.log(`la parola più lunga è ${wordOne}`);
} else if (wordOne.length < wordTwo.length){
    console.log(`la parola più lunga è ${wordTwo}`);
} else {
    console.log(`le parole sono lunghe uguale`);
}