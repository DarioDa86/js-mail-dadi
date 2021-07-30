// 1- generare numeri casuali da 1 a 6 sia per utente che per CPU
function LanciaDadi() {
    var numeroUtente =Math.floor(Math.random() * 6);
    console.log("Il tuo numero " + numeroUtente);

    var numeroCpu =Math.floor(Math.random() * 6);
    console.log("Il numero della CPU " + numeroCpu);

// 2- stabilire che vince (ovvero punteggio più alto)

    if (numeroUtente > numeroCpu) {
        alert("hai vinto maledetto fortunello!!");
    } else {
        alert("hai perso torna a rubare le autoradio!!");
    }

}