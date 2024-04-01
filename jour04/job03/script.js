
function populateTypeSelect(types) {
    var selectElement = document.getElementById("type");
    selectElement.innerHTML = "<option value=''>-- Sélectionner un type --</option>";
    types.forEach(type => {
        var option = document.createElement("option");
        option.value = type;
        option.textContent = type;
        selectElement.appendChild(option);
    });
}


fetch("pokemon.json")
    .then(response => response.json())
    .then(data => {
        var allTypes = [];
        data.forEach(pokemon => {
            pokemon.type.forEach(type => {
                if (!allTypes.includes(type)) {
                    allTypes.push(type);
                }
            });
        });

        populateTypeSelect(allTypes);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

document.getElementById("filterButton").addEventListener("click", function() {
    var id = document.getElementById("id").value.trim();
    var name = document.getElementById("nom").value.trim();
    var type = document.getElementById("type").value.trim();

    fetch("pokemon.json")
    .then(response => response.json())
    .then(data => {
        var filteredData = data.filter(pokemon => {
            return (id === '' || pokemon.id.toString() === id) &&
                   (name === '' || checkName(pokemon.name, name.toLowerCase())) &&
                   (type === '' || pokemon.type.includes(type));
        });

        displayFilteredData(filteredData);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
});

function displayFilteredData(data) {
    var resultsElement = document.getElementById("filteredResults");
    resultsElement.innerHTML = "";

    if (data.length === 0) {
        resultsElement.innerHTML = "Aucun résultat trouvé.";
        return;
    }

    var html = "<ul>";
    data.forEach(pokemon => {
        html += "<li>ID: " + pokemon.id + ", Nom: ";
        for (let lang in pokemon.name) {
            html += pokemon.name[lang] + " / ";
        }
        html = html.slice(0, -3); // Remove the last slash
        html += ", Type: " + pokemon.type.join(", ") + "</li>";
    });
    html += "</ul>";

    resultsElement.innerHTML = html;
}

function checkName(names, searchTerm) {
    for (let lang in names) {
        if (names[lang].toLowerCase().includes(searchTerm)) {
            return true;
        }
    }
    return false;
}