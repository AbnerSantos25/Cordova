function carregou() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML = 'A página carregou!';

    document.addEventListener('deviceready', dispositivoPronto, true);
    document.addEventListener('pause', parado, true);
    document.addEventListener('resume', retorno, true);


}

function dispositivoPronto() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>O dispositivo está pronto!';
}  

function parado(){
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>Pausa';
}

function retorno(){
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>Retorno';
}