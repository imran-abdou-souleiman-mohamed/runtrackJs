
function jsonValueKey(jsonString, key){
    const jsonObject = JSON.parse(jsonString);

    if (key in jsonObject){
        return jsonObject[key];
    }
    else {
        return null;
    }
}

const jsonString = `{
    "name": "La Plateforme",
    "adress": "8 rue d'hozier",
    "city": "Marseille",
    "nb": "11",
    "creation":"2019"
}`;

const name = jsonValueKey(jsonString, "name");
const adress =jsonValueKey(jsonString, "adress");
const city = jsonValueKey(jsonString, "city" );


console.log("city", city);
