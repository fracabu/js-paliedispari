/*
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer
*/


/*_________RAGIONAMENTO__________

1) prompt per scegliere pari o dispari
2)prompt per inserire un numero da 1 a 5
3) funzione math.random per generare numero da 1 a 5
4) funzione per sommare i numeri
5)funzione per stabilire se la somma dei due numeri è pari o dispari
6)condizione per dichiarare il vincitore
*/

let sceltaPariDispari = prompt("scegli se pari o dispari");
    console.log(sceltaPariDispari);
let inserisciNumero = parseInt(prompt("inserisci un numero da 1 a 5"));
    console.log(inserisciNumero);
function casuale() {
    num = Math.floor(Math.random() * 4) +1;
    document.getElementById("casuale").innerHTML ="Numero casuale " + num;
    console.log(casuale);
}
function sommaNumeri(num1, num2){
	
}
sommaNumeri=(3, 5);

for (let i = 0; i<=5; i++){

if(sommaNumeri % 2 === 0){
    console.log("il numero è pari vince pari");

}else(sommaNumeri % 2 === 1);{
    console.log ("il numero è dispari vince dispari")
}
}



