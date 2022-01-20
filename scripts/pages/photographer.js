async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    photographer {
        "name": "Mimi Keel",
        "id": 243,
        "city": "London",
        "country": "UK",
        "tagline": "Voir le beau dans le quotidien",
        "price": 400,
        "portrait": "MimiKeel.jpg"
    },
    // et bien retourner le tableau photographers seulement une fois
    return ({photographer})
}

async function displayData(photographers) {
    const photographerHeader = document.querySelector(".photographer-header");

    photographers.forEach((photographer) => {
        const photographerModel = headerFactory(photographer);
        const headerCardDOM = photographerModel.getHeaderCardDOM();
        photographerHeader.appendChild(headerCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();