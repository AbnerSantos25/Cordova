var claro = false; 

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', mudaTema);
}

function mudaTema() {
    var corSelecionada = document.getElementById('corTema').value;
    
    navigator.notification.confirm(
        'Deseja mudar o tema?', 
        function(buttonIndex) { finalizado(buttonIndex, corSelecionada); }, 
        'Mudar Tema',          
        ['Sim', 'Não']          
    );
}

function finalizado(buttonIndex, corSelecionada) {
    if (buttonIndex === 1) { 
        document.body.classList.remove('bg-warning', 'bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-info', 'bg-light', 'bg-dark');
        document.body.classList.add('bg-' + corSelecionada); 

        if (corSelecionada === 'light') {
            document.body.classList.remove('text-dark');
            document.body.classList.add('text-dark');
        } else {
            document.body.classList.remove('text-light');
            document.body.classList.add('text-light');
        }
    }
}
