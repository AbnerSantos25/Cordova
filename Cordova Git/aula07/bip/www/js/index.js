document.addEventListener('deviceready', onDeviceReady, false);

let score = 0;
const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');

function onDeviceReady() {
    spawnTarget();
    target.addEventListener('click', hitTarget);
    document.body.addEventListener('click', missTarget);
}

function spawnTarget() {
    const x = Math.random() * (window.innerWidth - 50); 
    const y = Math.random() * (window.innerHeight - 50);
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    target.style.display = 'block'; 
}

function hitTarget() {
    score++;
    scoreDisplay.innerText = score;
    navigator.notification.beep(1); 
    target.style.display = 'none'; 
    setTimeout(spawnTarget, 1000);
}

function missTarget() {
    if (target.style.display === 'block') {
        navigator.notification.beep(1); 
    }
}
