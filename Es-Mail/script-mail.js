//Mail check to enter

// //1- chiedere all'utente la sua mail
var richiestaMail = prompt("Inserisci la tua e-mail per accedere");
var accesso = false
 
// //2- verificare se è nella lista e quindi può accedere
var listaMail = ["mario@rossi.com", "remo@barca.com", "rosa@blu.com", "tossisco@forte.com", "lancio@dadi.com"];
console.log(listaMail.length);

// //3 stampare messaggio a video se può accedere o no 
for (var i = 0;  i < listaMail.length; i++) {
    console.log(listaMail[i]);
    if (richiestaMail == listaMail[i]) {
        accesso = true

}   else {

}
}
    
if (accesso == true){
    var accessoConsentito = alert("Mail corretta, puoi accedere al portale");
} else {
    var accessoNegato = alert("La mail inserita non è valida");
}
