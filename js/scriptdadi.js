//Mail check to enter

// //1- chiedere all'utente la sua mail
var richiestaMail = prompt("Inserisci la tua e-mail per accedere");


// //2- verificare se è nella lista e quindi può accedere
var listaMail = ["ciccio@ciccio.com", "pippo@pippo.com", "birra@birra.com", "tossisco@forte.com", "lancio@dadi.com" ];
console.log(listaMail);

for (var i = 0;  i < 5; i++) {
    if (richiestaMail == listaMail[i]) ;
    var accessoConsentito = alert("Grande, andiamo a spaccarci!!");

}   else {
    var accessoNegato = alert("Non fai parte della banda Bro, sparisci");

 {
//     var autorizzato = alert("Utente riconosciuto, puoi accedere");
// } else {
//     var accessoNegato = alert("Non fai parte della banda Bro, sparisci");
// }

// //for (var i = )
// //3 stampare messaggio a video se può accedere o no 
