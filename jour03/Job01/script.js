// Sélection du bouton d'affichage et ajout d'un gestionnaire d'événements
document.getElementById("showButton").addEventListener("click", function() {
    // Affichage du texte en changeant son style pour le rendre visible
    document.getElementById("quote").style.display = "block";
});

// Sélection du bouton de masquage et ajout d'un gestionnaire d'événements
document.getElementById("hideButton").addEventListener("click", function() {
    // Masquage du texte en changeant son style pour le rendre invisible
    document.getElementById("quote").style.display = "none";
});
