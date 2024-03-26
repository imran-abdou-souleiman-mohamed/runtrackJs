// Déclaration de la fonction jourTravaille
function jourTravaille(date) {
    // Récupération du jour, du mois et de l'année de la date
    var jour = date.getDate();
    var mois = date.getMonth() + 1; // Les mois sont indexés à partir de 0, donc on ajoute 1
    var annee = date.getFullYear();

    // Création d'un tableau contenant les jours fériés de l'année 2024 (à titre d'exemple)
    var joursFeries = [
        "2024-01-01", // Jour de l'an
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire des Alliés
        "2024-05-30", // Ascension
        "2024-06-10", // Lundi de Pentecôte
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    // Conversion de la date passée en paramètre au format "YYYY-MM-DD"
    var dateStr = date.toISOString().slice(0, 10);

    // Vérification si la date correspond à un jour férié
    if (joursFeries.includes(dateStr)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié.");
    } else if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end.");
    } else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé.");
    }
}
var maDate = new Date();
jourTravaille(maDate);