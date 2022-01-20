    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        fetch("../../photographers.json")
        .then(response => response.json())
        .then(data => {
        // data contient ton objet
    })
        // et bien retourner le tableau photographers seulement une fois
        return ({
            photographers: [...photographers, ...photographers, ...photographers]})
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    };

    async function init() {
        // Récupère les datas des photographes
        const { photographers } = await getPhotographers();
        displayData(photographers);
    };
    
    init();
    