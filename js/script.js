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

