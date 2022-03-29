


/* let myArray = email.split("");
let listchar = []

listchar.push(myArray)
console.log(listchar)
for (let i = 0; i < listchar.length; i++){
    console.log(listchar[i])
    for (let k = 0; k < listchar.length; k++){
        if (listchar[k] !== '@'){
            console.log('si')
        } else {
            console.log('no')
        }
    }
}  */
let flag = false
let email = prompt('inserisci email')
if (email == ''){
    alert('nessuna email inserita')
    flag = true
}

if(flag == false){
    let elencoemail = ['pippo@gmail.com', 'pluto@gmail.com', 'baudo@gmail.com','checco@gmail.com', 'paolo@gmail.com',]
    for (let i = 0; i < elencoemail.length; i++){
        if (email !== elencoemail[i]){
            console.log('email non trovata')
            let c = document.createElement("p")
            c.innerText = "email non trovata"
            document.getElementById('miodiv').innerHTML = c.innerText = "email non trovata"
        } else {
            console.log('email trovata')
            let b = document.createElement("p")
            b.innerText = "email trovata"
            document.getElementById('miodiv').innerHTML = b.innerText = "email trovata"
        }
    }
}


