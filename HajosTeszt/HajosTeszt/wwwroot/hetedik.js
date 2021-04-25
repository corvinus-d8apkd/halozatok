window.onload = () => {
    letöltés();
}
var kérdések;
var kérdésSorszám = 0;

function letöltés() {
    fetch('/questions/1')
        .then(response => response.json())
        .then(data => kérdésMegjelenítés(data)
    );

    function kérdésMegjelenítés(kérdés) {
        console.log(kérdés);
        document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
        document.getElementById("válasz1").innerText = kérdés.answer1
        document.getElementById("válasz2").innerText = kérdés.answer2
        document.getElementById("válasz3").innerText = kérdés.answer3
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }

    function letöltésBefejeződött(k) {
        console.log("Sikeres letöltés")
        console.log(k)
        kérdések = k;
        kérdésMegjelenítés(0);
    }
}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
}    

var kérdésMegjelenítés = function (kérdésSzáma) {
    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    let kép = document.getElementById("kép1");
    let válasz1 = document.getElementById("válasz1");
    let válasz2 = document.getElementById("válasz2");
    let válasz3 = document.getElementById("válasz3");

    kérdés_szöveg.innerHTML = kérdések[kérdésSzáma].questionText
    kép.src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzáma].image
    válasz1.innerText = kérdések[kérdésSzáma].answer1
    válasz2.innerText = kérdések[kérdésSzáma].answer2
    válasz3.innerText = kérdések[kérdésSzáma].answer3
}
function Vissza() {
    if (kérdésSzáma == 0) {
        kérdésSzáma = kérdések.length - 1;
        letöltés();
    }
    else {
        kérdésSzáma--;
        letöltés();
    }
}

function Elore() {
    if (kérdésSzáma == kérdések.length - 1) {
        kérdésSzáma = 0;
        letöltés();
    }
    else {
        kérdésSzáma++;
        letöltés();
    }
}

function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}