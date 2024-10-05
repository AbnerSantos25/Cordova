var numero1, numero2, soma;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    novaOperacao();

    var botao = document.getElementById('botao');
    botao.addEventListener('click', verifica);
}

function novaOperacao() {
    numero1 = Math.floor(Math.random() * 10) + 1;
    numero2 = Math.floor(Math.random() * 10) + 1;
    soma = numero1 + numero2;

    document.getElementById('conta').textContent = `${numero1} + ${numero2} = `;
}

function verifica() {
    var campo = document.getElementById('campo');
    var resposta = parseInt(campo.value);

    if (resposta === soma) {
        navigator.notification.alert(
            'Você acertou!', // Mensagem
            alertDismissed,  // Callback
            'Sucesso',       // Título
            'OK'             // Nome do botão
        );
    }
}

function alertDismissed() {
    document.getElementById('campo').value = '';
    novaOperacao();
}
