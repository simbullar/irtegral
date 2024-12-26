function readmode() {
    document.querySelector('.readmode').innerHTML = document.querySelector('.editor').value;
} readmode();
const intervalId = setInterval(readmode, 500);
