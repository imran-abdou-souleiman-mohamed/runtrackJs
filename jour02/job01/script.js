function citation() {
    var citationElement = document.getElementById("citation");
    var citationText = citationElement.textContent.trim();
    console.log(citationText);
}

document.getElementById("button").addEventListener("click", citation);
