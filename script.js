const listeMots = ["Cachalot", "Pétunia", "Serviette"];
const listePhrases = ["Pas de panique!", "La vie, l'univers et le reste", "Merci pour le poisson"];

// les variables globales

let choixMots = new Array();
let choixPhrases = new Array();
let score = 0;
let result = document.getElementById("result");

// la fonction pour remplir le tableau des mots

function mots(ArrayMots) {
    
    for (let i = 0; i < ArrayMots.length; i++) {
        let result = prompt("entrez le mot : " + ArrayMots[i]);
        choixMots.push(result)
    }
    return choixMots;
}

// la fonction pour remplir le tableau des phrases

function phrases(ArrayPhrases) {
    for (let i = 0; i < ArrayPhrases.length; i++) {
        let result = prompt("entrez la phrase : " + ArrayPhrases[i]);
        choixPhrases.push(result);
    }
    return choixPhrases;
}

// fonction pour comparer mots avec mots user

function compareMots(mots) {
    for (let i = 0; i < mots.length; i++) {
        for (let j = 0; j < choixMots.length; j++) {
            if (mots[i] === choixMots[j]) {
                score++;
            }
        }
    }
    return score;
}

// fonction pour comparer phrases avec phrases user

function comparePhrases(phrases) {
    for (let i = 0; i < phrases.length; i++) {
        for (let j = 0; j < choixPhrases.length; j++) {
            if (phrases[i] === choixPhrases[j]) {
                score++;
            }
        }
    }
    return score;
}

// Logique de départ lorsque user arrive sur la page
let firstChoice = prompt("Pour jouer, tapez mots ou phrases");

if (firstChoice === "mots") {
    mots(listeMots);
    compareMots(listeMots);
    result.innerHTML = score;
} else if (firstChoice === "phrases") {
    phrases(listePhrases);
    comparePhrases(listePhrases);
    result.innerHTML = score;
} else {
    result.innerHTML = "Vous n'avez pas tapé le bon mot, rafraichisser la page pour rejouer !";
}







