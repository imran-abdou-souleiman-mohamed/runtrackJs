function showhide() {
    var article = document.getElementById("article");

    // Si l'article est déjà présent, on le supprime
    if (article) {
        article.remove();
    } else {
        // Sinon, on crée un nouvel article et on l'ajoute à la page
        article = document.createElement("article");
        article.id = "article";
        article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        document.body.appendChild(article);
    }
}
