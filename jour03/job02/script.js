document.addEventListener("DOMContentLoaded", function() {
    const imgContainer = document.getElementById("imgContainer");
    const shuffleButton = document.getElementById("shuffleButton");
    const resetButton = document.getElementById("resetButton");
    const message = document.getElementById("message");
    const images = Array.from(document.querySelectorAll("#imgContainer img"));
    const originalOrder = images.slice();
    shuffleButton.addEventListener("click", shuffleImages);

    
    resetButton.addEventListener("click", resetImages);

   
    function shuffleImages() {
        images.sort(() => Math.random() - 0.5); 
        images.forEach(image => imgContainer.appendChild(image)); 
        updateMessage(); 
    }

  
    function resetImages() {
        imgContainer.innerHTML = ''; 
        originalOrder.forEach(image => imgContainer.appendChild(image));
    }

   
    function updateMessage() {
        const isCorrect = images.every((image, index) => image.src.endsWith(`arc${index + 1}.png`));
        if (isCorrect) {
            message.textContent = "Vous avez gagné";
            message.style.color = "green";
        } else {
            message.textContent = "Vous avez perdu";
            message.style.color = "red";
        }
    }
});