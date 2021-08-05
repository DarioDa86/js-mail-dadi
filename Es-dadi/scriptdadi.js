
var numeroUtente
var numeroCpu

LanciaDadi();
// 1- generare numeri casuali da 1 a 6 sia per utente che per CPU
function LanciaDadi() {
    var numeroUtente = Math.floor(Math.random() * 6);
    console.log("Il tuo numero " + numeroUtente);
    document.getElementById('punteggio-utente').innerHTML = numeroUtente;

    var numeroCpu = Math.floor(Math.random() * 6);
    console.log("Il numero della CPU " + numeroCpu);
    document.getElementById('punteggio-cpu').innerHTML = numeroCpu;

// 2- stabilire che vince (ovvero punteggio più alto) e stampare il risultato

    if (numeroUtente > numeroCpu) {
        document.getElementById('esito').innerHTML = "Hai vinto maledetto fortunello!!";
    } else {
        document.getElementById('esito').innerHTML = "Hai perso torna a rubare le autoradio!!";
    }

}