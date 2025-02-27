console.log("Mike's jsnacks")

// jsnack4
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array.

const number = []

for (i=0; i<5; i++){
    let newNumber = prompt('inserisci numero')
    if (newNumber%2 !==0){
        number.push(newNumber)
    }
}

 console.log(number)