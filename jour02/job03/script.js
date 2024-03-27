// Récupération de l'élément bouton et de l'élément compteur
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");

// Initialisation du compteur
var count = 0;

// Ajout d'un écouteur d'événement pour le clic sur le bouton
button.addEventListener("click", function() {
  // Incrémentation du compteur à chaque clic
  count++;
  // Mise à jour du contenu du compteur avec la nouvelle valeur
  compteur.textContent = count;
});
