/*

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

*/


//_____________________RAGIONAMENTO________________________

/* 1) Prompt per chiedere all'utente di inserire una parola 
    2) creare funzione per capire se è palindroma
*/

let parola = prompt("inserisci una parola");
const parolaInserita="casa";





let parolaAlContrario="";
const parolaInverita="";

for(let i =parola.length-1; i>=0; i--){
    const letteraCorrente = parola[i];
    console.log(letteraCorrente);

    parolaAlContrario += letteraCorrente;
}


function revertWord(parolaDaInvertire){

}

function isPalindroma(parolaDaControllare){
    const parolaInverita = revertWord(parolaDaControllare);
    return parolaDaControllare === parolaInvertita;
}
console.log()

console.log(isPalindroma(parola));




/

