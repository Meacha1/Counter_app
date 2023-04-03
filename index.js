//
let count = 0;
function incriment() {
    count++;
    document.getElementById("count-el").innerText=count;
}
function save() {
    document.getElementById("save-el").textContent += count + " - ";
    document.getElementById("count-el").innerText=0;
    count = 0;
}