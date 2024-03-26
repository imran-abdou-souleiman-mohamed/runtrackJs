// Fonction pour vérifier si un nombre est premier
function estNombrePremier(nombre) {
    if (nombre <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}

// Fonction sommeNombresPremiers
function sommeNombresPremiers(nombre1, nombre2) {
    // Vérification si les deux nombres sont premiers
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2; // Retourne la somme des nombres premiers
    } else {
        return false; // Retourne false si au moins l'un des nombres n'est pas premier
    }
}
var result = sommeNombresPremiers(2, 2);
console.log(result);