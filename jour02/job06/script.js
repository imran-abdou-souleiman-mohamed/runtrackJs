// Tableau contenant le code Konami
var konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

// Index pour suivre la progression du code Konami
var konamiIndex = 0;

// Fonction pour vérifier si le code Konami a été entré
function checkKonami(event) {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonami();
            konamiIndex = 0; // Réinitialisation de l'index
        }
    } else {
        konamiIndex = 0; // Réinitialisation de l'index si une touche incorrecte est pressée
    }
}

// Fonction pour activer le code Konami
function activateKonami() {
    document.body.classList.add('konami');
    document.getElementById('content').style.display = 'none';
}

// Ajoute un écouteur d'événement pour chaque touche pressée
document.addEventListener('keydown', checkKonami);

// Fonction pour gérer l'apparition / disparition du footer en fonction du scrolling
function handleFooterColor() {
    var footer = document.querySelector("footer");
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;
    var scrollTop = window.scrollY || window.pageYOffset;
    var scrollPercent = (scrollTop / (bodyHeight - windowHeight)) * 100;

    footer.style.backgroundColor = "hsl(" + scrollPercent + ", 100%, 50%)";
}

// Ajoute un écouteur d'événement pour le scrolling
window.addEventListener('scroll', handleFooterColor);
