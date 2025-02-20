/* STAMPARE NUMERO DA 1 A 100 + MULTIPLI DI 3 FIZZ + MULTIPLI DI 5 BUZZ + MULTIPLY DI 3 E 5 FIZZBUZZ*/


for (i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}



