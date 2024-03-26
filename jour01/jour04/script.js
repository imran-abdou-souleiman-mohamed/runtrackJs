// Déclaration de la fonction bisextile
function bisextile(annee) {
    // Vérification des conditions pour déterminer si l'année est bissextile
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true; // Si l'année est bissextile, retourne true
    } else {
        return false; // Si l'année n'est pas bissextile, retourne false
    }
}

