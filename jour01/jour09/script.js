function tri(numbers, order) {
    // Vérification de l'ordre demandé
    if (order === "asc") {
        // Tri dans l'ordre ascendant
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        // Tri dans l'ordre décroissant
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        // Si l'ordre n'est ni "asc" ni "desc", retourner une erreur
        throw new Error("L'ordre doit être 'asc' ou 'desc'.");
    }

    // Retourner le tableau trié
    return numbers;
}

// Exemple d'utilisation de la fonction
var nombres = [3, 1, 5, 2, 4];
var ordreAscendant = tri(nombres.slice(), "asc");
var ordreDescendant = tri(nombres.slice(), "desc");

console.log("Ordre ascendant :", ordreAscendant); // Affichera [1, 2, 3, 4, 5]
console.log("Ordre descendant :", ordreDescendant); // Affichera [5, 4, 3, 2, 1]
