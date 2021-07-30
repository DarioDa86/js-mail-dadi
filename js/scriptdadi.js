//Mail check to enter

//1- chiedere all'utente la sua mail
var richiestaMail = prompt("Inserisci la tua e-mail per accedere");


//2- verificare se è nella lista e quindi può accedere
var listaMail = ["ciccio@ciccio.com", "pippo@pippo.com", "birra@birra.com", "tossisco@forte.com" "lancio@dadi.com" ];

if (richiestaMail.includes(listaMail)) {
    prompt("Utente riconosciuto, puoi accedere");
} else {
    prompt("Non fai parte della banda Bro, sparisci");
}

//for (var i = )
//3 stampare messaggio a video se può accedere o no 