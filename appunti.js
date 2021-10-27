//FUNZIONI COMPLESSE

//function sum(numOne, numTwo) {
//    const sumTot = numOne + numTwo;
//  return sumTot;
//}

//const sum = function(numOne, numTwo) {
//    const sumTot = numOne + numTwo;
//  return sumTot;
//}

//----------

//function sum(numOne, numTwo) {
//    const sumTot = numOne + numTwo;

//Arrow function
// In una sola riga si scrive così...

// const sum = (numOne, numTwo) => numOne + numTwo

//const sum = (numOne, numTwo) => {
//    console.log("Salve Casi");
//    return numOne + numTwo;
//}

//--------------

//const fruits = ['kiwi', 'apple', 'orange', 'pear']
//fruits.sort()

//Arrowfunction

// const sortingArray = (array) => array.sort();
// sortingArray(fruits)

//Funzione anonima
// () => console.log('Hola!')
// Il ciclo di vita di una funzione è legato alla permanenza nello stack

//----------

//  const sum = (numOne, numTwo) => numOne + numTwo;

// console.log(sum())             //Nan 
// console.log(sum(4,6))       // console: 10

//--------

//const fruits = ['kiwi', 'apple', 'orange', 'pear']

//function printFruits(array) {
//    console.log(typeof array);          // console: object
//}

//printFruits(fruits);
//Il typeof di un array ritorna un oggetto

//--------------

//Spread operator
//const fruits = ['kiwi', 'apple', 'orange', 'pear']

//function printFruits([...array]) {
//    console.log(array);   //console: ['kiwi', 'apple', 'orange', 'pear']
//}

//printFruits(fruits);

// restituisce un array
//-------
//Spread operator
//const fruits = ['kiwi', 'apple', 'orange', 'pear']

//function printFruits(...array) {
//    console.log(array);   
//}

//Se non mettiamo [] restituisce un array dentro un array

//printFruits(fruits);

//-------

//Spread operator
//const fruits = ['kiwi', 'apple', 'orange', 'pear']

//function printFruits(...array) {
//    console.log(...array);   //console: kiwi aple orange pear
//}

//Se settiamo ... dentro il console.log restituisce una stringa

//printFruits(fruits);

//--------

/*
//Callback
//E' possibile anche inserire come parametro un'altra funzione
const sum = (numOne, numTwo) => numOne + numTwo;
const yourSum = (yourName, yourFunc) => {
return (yourName + ` ` + yourFunc);
}
console.log(yourSum(`Casi`, sum(7, 9)));
*/

// Il primo parametro della funzione yourSum è 'Casi'
// Il secondo parametro della funzione yourSum è sum(7,9) ovvero il valore di ritorno della funzione sum

//onclick rientra nelle callback...
//<button onclick="myFunction()"></button>
//però può causare malfunzionamenti

//----------------
/*
const book=[
    {name:'a'},
    {name: 'b'}
]
book.sort((a, b) => (a.name > b.name) ? 1 : -1);
console.log(book); 
*/

//console:
// (2) [{…}, {…}]
//0: {name: 'a'}
//1: {name: 'b'}
//length: 2
//[[Prototype]]: Array(0)
//Il parametro di sort è una funzione
