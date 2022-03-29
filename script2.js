let utente =(Math.floor(Math.random() * 7)) ;
console.log(utente)
let computer =(Math.floor(Math.random() * 7));
console.log(computer)
if (utente < computer){
    console.log('hai perso')
} else {
    console.log('hai vinto')
}