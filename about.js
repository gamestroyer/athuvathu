let sentence = "Hi, I like making things <br>I don't like websites though, I know that for sure now <br>idk what to write here <br>alr bye guys <br>"
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