"use strict";
// SNACK 1
// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo e la lista degli invitati in ordine di posto.
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo, (tableName)
// nome dell'ospite, (guestName)
// posto occupato. (place)
// Generiamo e stampiamo in console la lista per i segnaposto.

const TavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

// creo un nuovo array che conterrà gli oggetti
// const listToPrint = [];
// con un ciclo forEach
// ad ogni ciclo prendo il nome e l'indice dal vecchio array e li inserisco in un nuovo oggetto
// pusho il nuovo oggetto nel nuovo array
// TavoloVip.forEach((el,index)=>{
//     let invitato = {};
//     invitato.tableName = 'TavoloVip';
//     invitato.guestName = el;
//     invitato.place = index + 1;
//     listToPrint.push(invitato);
// })


// soluzione con ciclo map 
const listToPrint = TavoloVip.map((el,index)=>{
    let invitato = {};
    invitato.tableName = 'TavoloVip';
    invitato.guestName = el;
    invitato.place = index + 1;
    return invitato;
})

// stampo la lista con gli oggetti 
console.log(listToPrint);



// SNACK2 
// Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame.
// Questo è l'elenco degli studenti:
// Id Name Grades
// 213 Marco della Rovere 78
// 110 Paola Cortellessa 96
// 250 Andrea Mantegna 48
// 145 Gaia Borromini 74
// 196 Luigi Grimaldello 68
// 102 Piero della Francesca 50
// 120 Francesca da Polenta 84

// 1) Per preparare l'aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo
//ES (Marco della Rovere => MARCO DELLA ROVERE);

// 2) Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70

// 3) Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120



const students = [
    {
        id: 213,
        name: 'Marco Della rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
]
// array in uppercase 
const uppercaseNames = students.map((el)=>{
    return el.name.toUpperCase();
})
console.log(uppercaseNames);

// array voti superiori a 70 
const highGrades = students.filter((el)=>{
    return el.grades >70;
})
console.log(highGrades);

// array voti superiori a 70 e id > 120 
const highId = highGrades.filter ((el)=> {
    return el.id > 120;
})
console.log(highId);

// SNACK 3
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare in console la bici con peso minore utilizzando destructuring e template literal

const bycicles = [
    {
        name: 'bikeA',
        weight: 6
    },
    {
        name: 'bikeB',
        weight: 7
    },
    {
        name: 'bikeC',
        weight: 10
    },
    {
        name: 'bikeD',
        weight: 12
    },
    {
        name: 'bikeE',
        weight: 5
    },
    {
        name: 'bikeF',
        weight: 8
    },
    {
        name: 'bikeG',
        weight: 4
    }
]

let minWeightBike;
bycicles.forEach((el,index)=>{
    if (index === 0){
        minWeightBike = el;
    }else if (minWeightBike.weight > el.weight){
        minWeightBike = el;
    }
})
console.log(minWeightBike);

console.log(`La bici con il peso minore è ${minWeightBike.name}`)


// SNACK 4
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    {
        name: 'Pippo',
        score: 0,
        fouls:0
    },
    {
        name: 'Pluto',
        score: 0,
        fouls:0
    },
    {
        name: 'Paperino',
        score: 0,
        fouls:0
    },
    {
        name: 'Minnie',
        score: 0,
        fouls:0
    },
    {
        name: 'Qui',
        score: 0,
        fouls:0
    },
    {
        name: 'Quo',
        score: 0,
        fouls:0
    },
    {
        name: 'Qua',
        score: 0,
        fouls:0
    }
]
teams.forEach((el)=> {
    el.score = getRndInteger(1, 100);
    el.fouls = getRndInteger(1,20);
})
console.log (teams);


// UTILITY 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}