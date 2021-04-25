window.onload = () => {
    letöltés();
}
var kérdések;
var kérdésSorszám = 0;

function letöltés() {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));

    function letöltésBefejeződött(k) {
        console.log("Sikeres letöltés")
        console.log(k)
        kérdések = k;
        kérdésMegjelenítés(0);
    }
}
