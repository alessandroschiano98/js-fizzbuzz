/* ESERCIZIO:
STAMPARE NUMERO DA 1 A 100 + 
MULTIPLI DI 3 sostituirli con FIZZ + 
MULTIPLI DI 5 sostituirli con BUZZ + 
MULTIPLY DI 3 E 5 sostituirli con FIZZBUZZ;
*/


for (i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("fizz");
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else if (i % 3 === 0) {
        console.log("fizzBuzz");
    } else {
        console.log(i);
    }
}



