const puzzlePieces = document.querySelectorAll('.puzzle-piece');
const emptyPiece = document.querySelector('.empty-piece');
const message = document.getElementById('message');
const restartButton = document.getElementById('restartButton');

let isGameWon = false;

// Mélanger les pièces du puzzle
function shufflePieces() {
    const piecesArray = Array.from(puzzlePieces);
    piecesArray.forEach(piece => {
        const randomIndex = Math.floor(Math.random() * piecesArray.length);
        puzzleContainer.insertBefore(piece, puzzlePieces[randomIndex]);
    });
}

// Vérifier si le joueur a gagné
function checkWin() {
    const currentOrder = Array.from(puzzlePieces).map(piece => piece.id);
    const correctOrder = ['piece1', 'piece2', 'piece3', 'piece4', 'piece5', 'piece6', 'piece7', 'piece8'];
    if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
        isGameWon = true;
        message.textContent = "Vous avez gagné";
        message.classList.add('green');
        restartButton.style.display = "block";
    }
}

// Gérer le déplacement des pièces
puzzlePieces.forEach(piece => {
    piece.addEventListener('click', () => {
        if (!isGameWon) {
            const pieceIndex = Array.from(puzzlePieces).indexOf(piece);
            const emptyIndex = Array.from(puzzlePieces).indexOf(emptyPiece);
            const pieceRow = Math.floor(pieceIndex / 3);
            const pieceCol = pieceIndex % 3;
            const emptyRow = Math.floor(emptyIndex / 3);
            const emptyCol = emptyIndex % 3;
            const rowDiff = Math.abs(pieceRow - emptyRow);
            const colDiff = Math.abs(pieceCol - emptyCol);
            if ((rowDiff === 1 && colDiff === 0) || (colDiff === 1 && rowDiff === 0)) {
                // Déplacer la pièce vers la case vide
                puzzleContainer.insertBefore(piece, emptyPiece);
                checkWin();
            }
        }
    });
});

// Redémarrer le jeu
restartButton.addEventListener('click', () => {
    puzzlePieces.forEach(piece => {
        piece.classList.remove('green');
    });
    message.textContent = "";
    restartButton.style.display = "none";
    isGameWon = false;
    shufflePieces();
});

// Mélanger les pièces au chargement de la page
window.addEventListener('load', shufflePieces);
