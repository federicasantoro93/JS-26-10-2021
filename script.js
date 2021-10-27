// Calcolatrice

//console.log (sum (5,4));
/*
//Creare una calcolatrice che permetta all'utente di selezionare una operazione 
e dati più di un numero (altrimenti restituisce lo stesso) ritorni la corrispettiva operazione. 

PSEUDOCODICE
1. L'utente sceglie l'operazione e i numeri
2. Se il numero scelto:
    - è solo uno, ritorna lo stesso numero;
    - è inesistente, ritorna un errore;
    - è piu di uno, ne ritorna l'operazione
3. Stampa a video il risultato dell'operazione
*/


/*
const sum = (numOne, numTwo) => numOne + numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;

function calculatur(operation, numbers) {
    const operationChoise = prompt("Scegli un'operazione");
    let totOperation = 0;

    if (operationChoise === '+' || operationChoise === 'somma') {
        totOperation = operation(...numbers); //operation è una variabile non definita che assume il comportamento di sum, mult, ecc..
    }
    
      return totOperation;
}
*/

//operation è una funzione 
//numbers è un array, il plurale numbers ci fa intuire che numbers è un array di numeri
//totOperation = operation(...numbers); stiamo invocando la funzione operation
// calculator (sum, [5,5]) Questa è una callback: stiamo impostando come primo parametro la funzione somma
//Nel momento in cui selezioniamo l'operazione tramite parametro non abbiamo più bisogno della condizione

/*
const sum = (numOne, numTwo) => numOne + numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;

function calculatur(operation, numbers) {
        let totOperation = 0;
        totOperation = operation(...numbers); 
        return totOperation;
}

//const numbers=[8,12];
//calculatur( mult,numbers);



//i numeri li sto inserendo io programmatore, non l'utente

//Concetto di callback => guardate al parametro 'operation'
//Concetto di spread

let operationChoise = prompt("Inserisci operazione: ");
let numbersChoise = prompt("inserisci numeri: ");

const numbers =  numbersChoise.split(',')
const parsedNumbers = [];

for(x of numbers) {
    parsedNumbers.push(parseInt(x));
}

if(operationChoise === "somma") {
    calculatur(sum, parsedNumbers);
}

console.log(totOperation);

//if(operationChoise === "mult") {
//    calculatur(mult,parsedNumbers);
//}

//devo convertire la stringa in un array

*/

//CODICE SCRIITO DA CASIMIRO
const sum = (numOne, numTwo) => numOne + numTwo;

const mult = (numOne, numTwo) => numOne * numTwo;

function calculator(operation, numbers) {
  let totOperation = 0;
  totOperation = operation(...numbers);
  return totOperation;
}

let operationChoice = prompt("Inserisci operazione: ");
let numbersChoiche = prompt("Inserisci numeri: ");
const numbers = numbersChoiche.split(",");
const parsedNumbers = [];

for (x of numbers) {
  parsedNumbers.push(parseInt(x));
}

if (operationChoice === "somma") {
  calculator(sum, parsedNumbers);
  console.log (calculator(sum, parsedNumbers));
}

