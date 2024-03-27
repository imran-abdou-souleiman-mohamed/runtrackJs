// Récupération de l'élément textarea
var keylogger = document.getElementById("keylogger");

// Ajout d'un écouteur d'événements pour la pression de touche
document.addEventListener("keypress", function(event) {
  // Récupération de la lettre tapée par l'utilisateur
  var keyPressed = event.key;

  // Si le focus est sur le textarea, ajouter la lettre deux fois
  if (document.activeElement === keylogger) {
    keylogger.value += keyPressed + keyPressed;
  } else {
    // Sinon, ajouter la lettre une seule fois
    keylogger.value += keyPressed;
  }
});
