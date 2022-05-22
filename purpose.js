let sentence = "This website literally have no purpose 🗿"
let shit = document.getElementById("shit");
let letter = 0;

function typeLetters() {
    if (letter == sentence.length) {
        clearInterval(what);
    }
    shit.innerHTML = sentence.slice(0, letter);
    letter++;
}

let what = setInterval(typeLetters, 100);