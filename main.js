const prompt = require('prompt-sync')();

let questionObjOne = {
    question: "Combien de film Star Wars ont été réalisés par Georges Lucas ? ",
    responses: ["Réponse 1 : 1", "Réponse 2 : 2", "Réponse 3 : 4", "Réponse 4 : 6"],
};
questionObjOne.goodAnswer = questionObjOne.responses[2];

let questionObjTwo = {
    question: "D'où venaient les anges auxquels Anakin faisait allusion en les comparant à Padmée dans La menace Fantôme?",
    responses: ["Réponse 1 : Naboo", "Réponse 2 : Tatooine" , "Réponse 3 : Lunes de Yego", "Réponse 4 : Lune forestière d'Endor"],
};
questionObjTwo.goodAnswer = questionObjTwo.responses[2];

let questionObjThree = {
    question: "Quelle est l'espèce de l'Inquisiteur?",
    responses: ["Réponse 1 : Toydarien", "Réponse 2 : Sakoan", "Réponse 3 : Zabrak", "Réponse 4 : Pau'an"],
};
questionObjThree.goodAnswer = questionObjThree.responses[3];

let questionObjFour = {
    question: "Sur quel monde est né l'ordre Jedi?",
    responses: ["Réponse 1 : Coruscant", "Réponse 2 : Ossus", "Réponse 3 : Tython", "Réponse 4 : Dantooine"],
};
questionObjFour.goodAnswer = questionObjFour.responses[2];

let questionObjFive = {
    question: "Quel cristal n'est pas associé à la conception du sabre-laser?",
    responses: ["Réponse 1 : Le cristal Adegan", "Réponse 2 : Le cristal Bondar", "Réponse 3 : Le cristal Arius", "Réponse 4 : Le cristal Kaiburr"],
};
questionObjFive.goodAnswer = questionObjFive.responses[2];

let tableau = [questionObjOne, questionObjTwo, questionObjThree, questionObjFour, questionObjFive];
let choice = "";
let point = 0;

for (let i = 0; i < tableau.length; i++) {
    console.log(tableau[i].question + " Choisis entre la réponse 1, 2, 3 ou 4 :" );

    for (let j = 0; j < tableau[i].responses.length; j++) {
        console.log(tableau[i].responses[j]);
    }

    choice = Number(prompt(""));
    while (choice <= 0 || choice >= 5 || isNaN(choice)){
        choice = Number(prompt(`Erreur : choisis une réponse entre 1,2,3 ou 4`));
    }
    if (tableau[i].responses[choice - 1] == tableau[i].goodAnswer) {
        console.log('Réponse correcte');
        point+= 1;
        console.log(`Tu as ${point} point sur 5`);
    }
    else {
        console.log("Réponse incorrecte");
        point += 0;
        console.log(`La bonne réponse est la réponse ${tableau[i].goodAnswer}`);
        console.log (`Tu as ${point} point sur 5`);
    }
}