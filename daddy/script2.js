let utente =(Math.floor(Math.random() * 7) + 1) ;
console.log(utente)
let computer =(Math.floor(Math.random() * 7) + 1);
console.log(computer)
if (utente < computer){
    console.log('hai perso')
} else if (utente == computer){
    console.log('hai pareggiato')
} else {
    console.log('hai vinto')
}