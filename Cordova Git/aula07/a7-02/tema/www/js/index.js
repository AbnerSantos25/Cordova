var claro = false;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', mudaTema);
}

function mudaTema() {
    navigator.notification.confirm(
        'Deseja mudar o tema?', 
        finalizado,             
        'Mudar Tema',         
        ['Sim', 'Não']
    );
}

function finalizado(buttonIndex) {
    if (buttonIndex === 1) {
        claro = !claro;

        if (claro) {
            document.body.classList.remove('bg-dark', 'text-light');
            document.body.classList.add('bg-light', 'text-dark');
        } else {
            document.body.classList.remove('bg-light', 'text-dark');
            document.body.classList.add('bg-dark', 'text-light');
        }
    }
}
