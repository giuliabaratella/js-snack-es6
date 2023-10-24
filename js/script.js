// Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
// Ci ha lasciato il nome del tavolo e la lista degli invitati in ordine di posto.
// Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
// nome del tavolo, (tableName)
// nome dell'ospite, (guestName)
// posto occupato. (place)
// Generiamo e stampiamo in console la lista per i segnaposto.

const TavoloVip = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

// creo un nuovo array che conterrà gli oggetti
const listToPrint = [];
// con un ciclo forEach
// ad ogni ciclo prendo il nome e l'indice dal vecchio array e li inserisco in un nuovo oggetto
// pusho il nuovo oggetto nel nuovo array
TavoloVip.forEach((el,index)=>{
    let invitato = {};
    invitato.tableName = 'TavoloVip';
    invitato.guestName = el;
    invitato.place = index + 1;
    listToPrint.push(invitato);
})
// stampo la lista con gli oggetti 
console.log(listToPrint);




