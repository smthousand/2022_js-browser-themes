const clock = document.querySelector(".status-bar__clock span");

function systemClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${min}`
}
systemClock();
setInterval(systemClock, 1000);