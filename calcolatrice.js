/* 
    Sulla base di quanto detto a lezione, creare una calcolatrice capace di svolgere diverse operazioni
    (più ne mettete meglio è!).
    La scelta dell'operazione da effettuare (per esempio somma)
    e la scelta dei numeri, deve essere specificata dell'utente.
    A tal fine, potrete utilizzare la funzione 'prompt()' per catturarne i dati.
    
    ATTENZIONE:
    L'utilizzo delle callbacks, delle arrow function e dello spread operator
    sono elementi fondamentali di questa esercitazione, mi raccomando.
    Potete chiaramete controllare il codice scritto a lezione, ma cercate di non copiare.
*/

/* Esercizio avanzato:
    Oltre alle classici funzioni somma, moltiplicazione, ecc... provate ad implementare
    l'operazione potenza e l'operazione radice quadrata.
    SUGGERIMENTO: esistono delle funzioni della libreria Math (vista a lezione).
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*
PSEUDOCODICE
1. L'utente sceglie l'operazione e i numeri
2. Se il numero scelto:
    - è solo uno, ritorna lo stesso numero;
    - è inesistente, ritorna un errore;
    - è piu di uno, ne ritorna l'operazione
3. Stampa a video il risultato dell'operazione
+ RIASSUNTO ESERCIZIO SVOLTO A LEZIONE 
    - Dichiaro le arrow functions delle operazioni (somma, sottrazione, moltiplicazione, divisione, potenza, radice quadrata)
    - Dichiaro la funzione calculator
    - Creo i prompt
    - Applico .split all'input del prompt dedito alla scelta dei numeri per ottenere i numeri che costituiranno il parametro numbers
    - Creo un array vuoto in cui inserirò i numeri una volta trasformati da string in number
    - Imposto un ciclo for in modo che renda interi tramite .parseInt e 'pushi' i numeri nell'array creato in precedenza 
    - Imposto le istruzioni condizionali tramite SWITCH
*/

//FUNZIONI SOMMA, SOTTRAZIONE, ECC...
const sum = (numOne, numTwo) => (numOne + numTwo);
const subtraction = (numOne, numTwo) => (numOne - numTwo);
const multiplication = (numOne, numTwo) => (numOne * numTwo);
const division = (numOne, numTwo) => (numOne / numTwo);
const power = (numOne, numTwo) => Math.pow(numOne, numTwo); //Math.pow(x,y) Restituisce la base x alla potenza dell'esponente y (ovvero x^y)
const squareRoot = (numOne) => Math.sqrt(numOne); //console.log(squareRoot(36, 81)); console: 6 ?Perchè solo un parametro? E' possibile inserire all'interno anche Math.sqrt(numTwo)?

//FUNZIONE CALCULATOR
function calculator(operation, numbers){
    let operationTotal = 0; // ?Perchè?
    operationTotal = operation(... numbers) // Con lo spread operator '...' inserisco gli elementi di un array (in questo caso quelli provenienti dal prompt dopo averli fatti diventare un array di numeri interi) come parametri.
    return operationTotal;
}

//PROMPT
let chosenOperatin = prompt("Digita un'operazione(somma, sottrazione, moltiplicazione, divisione, potenza, radice quadrata):")
let chosenNumbers = prompt("Digita uno o più numeri interi separati da una virgola:") //E se volessi estendere il range anche ai numeri decimali? Basterebbe utilizzare Parsefloat piuttosto che Parseint?

const numbers = chosenNumbers.split(','); // Lo .split divide la stringa (chosenNumbers) in un array di sottostringhe (numbers) separate da una virgola (')
parsedNumbers = []; //Creo un array vuoto in cui andrò a "pushare" i numeri una volta trasformati da string a number

// Tramite il ciclo "for of" trasformo le stringhe in numeri interi e li "pusho" nell'array vuoto parsedNumbers
for(x of numbers){
    parsedNumbers.push(parseInt(x)); 
}


switch(true)
{
    case parsedNumbers.length == '1' && typeof(parsedNumbers) != 'number':
    alert('Inserisci un numero!'); 
    break
    case parsedNumbers.length == '1' && chosenOperatin == 'radice quadrata':
    calculator(squareRoot, parsedNumbers);
    console.log (calculator(squareRoot, parsedNumbers));   
    break
    case parsedNumbers.length == '1' && chosenOperatin != 'radice quadrata':
    console.log (parsedNumbers);   
    break
    case parsedNumbers.length == '2':
        switch (chosenOperatin) {
            case "somma" :
            calculator(sum, parsedNumbers)
            console.log (calculator(sum, parsedNumbers))
            break
            case "sottrazione" :
            calculator(division, parsedNumbers)
            console.log (calculator(subtraction, parsedNumbers))
            break
            case "moltiplicazione" :
            calculator(multiplication, parsedNumbers)
            console.log (calculator(multiplicationmoltip, parsedNumbers))
            break
            case "divisione" :
            calculator(division, parsedNumbers)
            console.log (calculator(division, parsedNumbers))
            break
            case "potenza" :
            calculator(power, parsedNumbers)
            console.log (calculator(power, parsedNumbers))
            break
             
        } 


    

}

/*
switch (chosenOperatin) {
        case "somma" :
        calculator(sum, parsedNumbers)
        console.log (calculator(sum, parsedNumbers))
        break
        case "sottrazione" :
        calculator(division, parsedNumbers)
        console.log (calculator(subtraction, parsedNumbers))
        break
        case "moltiplicazione" :
        calculator(multiplication, parsedNumbers)
        console.log (calculator(multiplicationmoltip, parsedNumbers))
        break
        case "divisione" :
        calculator(division, parsedNumbers)
        console.log (calculator(division, parsedNumbers))
        break
         
    }
    */

/*
if (chosenOperatin === "somma") {
    calculator(sum, parsedNumbers);
    console.log (calculator(sum, parsedNumbers));
  }
   se digito somma e 4,5 console: 9 Funziona!!!
  */

//SWITCH
/*
2. Se il numero scelto:
    - è solo uno, ritorna lo stesso numero;
    - è inesistente, ritorna un errore;
    - è piu di uno, ne ritorna l'operazione
*/
    
/*
if (operationChoice === "somma") {
    calculator(sum, parsedNumbers);
    console.log (calculator(sum, parsedNumbers));
  }
*/

/*
SWITCH (Istruzioni condizionali)
Simile a if/else, lo switch viene utilizzato quando siamo di fronte a diverse alternative.
SINTASSI:
switch (variabile) {
case ipotesi 1:
azione 1
break
case ipotesi2:
azione2
break
case ipotesi3
azione 3
break
}
NOTA:
aggiungere break è importante per uscire dallo switch
una volta eseguita l’azione
*/

/*
CALLBACK
È possibile anche inserire come parametro un’altra funzione
const sum = (numOne, numTwo) => numOne + numTwo;
const yourSum = (yourName, yourFunc) => {
return (yourName + ` ` + yourFunc);
}
console.log(yourSum(`Casi`, sum(7, 9)));
*/

/*
ARROW FUNCTION
Una arrow function non è altro che una funzione definita in modo più ‘contenuto’.
Per esempio potremmo scrivere:
Function sum(numOne, numTwo) {
return numOne + numTwo;
}
In una singola riga, così:
const sum = (numOne, numTwo) => numOne + numTwo
const fname = (param1, paramN) => expression
*/

/*
SPREAD OPERATOR
È possibile inserire gli elementi di un array (ma anche di un oggetto) come parametri.
const evenNumbers = [2,4,6,8];
Function sum([ ...evenNumbers ]) {
// ... code ...
}
Spread syntax
Strumento potentissimo con i metodi, come per es. math.min( ...evenNumbers )
*/

/*
Lezione dei anatomia
Il ciclo di vita di un funzione:
1. Dichiarazione -> si definisce nome, parametri e contenuto
2. Invocazione -> la si richiama tramite il nome e si inseriscono i parametri
function makePizza(flavor) {
// … code …
return pizza;
}
Keyword Name Parameters
Return Keywork
Dichiarazione
Invocazione
function makePizza(margherita);
*/