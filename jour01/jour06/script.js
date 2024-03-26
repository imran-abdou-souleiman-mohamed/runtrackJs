// Déclaration de la fonction fizzbuzz
function fizzbuzz() {
    // Boucle for pour parcourir les nombres de 1 à 151
    for (var i = 1; i <= 151; i++) {
        // Vérification des conditions pour afficher Fizz, Buzz ou FizzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzbuzz();