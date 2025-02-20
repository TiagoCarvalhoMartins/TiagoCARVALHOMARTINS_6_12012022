    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        let response = await fetch("https://tiagocarvalhomartins.github.io/TiagoCARVALHOMARTINS_6_12012022/data/photographers.json ")
        let myJSON = await response.json();
           
        
        // et bien retourner le tableau photographers seulement une fois
        return (myJSON)
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
    