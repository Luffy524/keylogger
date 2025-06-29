const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startBtn = document.getElementById("start-button");
const stopBtn = document.getElementById("stop-button");

startBtn.addEventListener("click", () => {
    document.addEventListener("keydown", handleDown);
    document.addEventListener("keyup", handleUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

stopBtn.addEventListener("click", () => {
    document.removeEventListener("keydown", handleDown);
    document.removeEventListener("keyup", handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

function handleDown(e) {
    logDiv.textContent = `Key ${e.key} pressed down`;
    stateDiv.textContent = `key is down`;
}

function handleUp(e) {
    logDiv.textContent = `Key ${e.key} pressed up`;
    stateDiv.textContent = `key is up`;
}