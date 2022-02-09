async function getMedias() {
	// Penser à remplacer par les données récupérées dans le json
	let response = await fetch("https://tiagocarvalhomartins.github.io/TiagoCARVALHOMARTINS_6_12012022/data/photographers.json ")
	let myJSON = await response.json();
	   
	
	// et bien retourner le tableau photographers seulement une fois
	return (myJSON)
}

function getID() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idPhotographer = urlParams.get("id")
    return (idPhotographer)
}

async function displayHeader(photographers) {
    const photographerHeader = document.querySelector(".photograph-header");
    const headerModel = headerFactory(photographers);
    const headerCardDOM = headerModel.getHeaderCardDOM();
    photographerHeader.appendChild(headerCardDOM);
};

async function displayMedia(medias) {
    const photographerMedia = document.querySelector(".media");

    medias.forEach((media) => {
        if (getID() == media.photographerId) {
            const mediaModel = mediaFactory(media);
            const mediaCardDOM = mediaModel.getMediaCardDOM();
            photographerMedia.appendChild(mediaCardDOM);
        }
    });
};

async function init() {
    // Récupère les datas des photographes
    const  { medias }  = await getMedias();
    displayMedia(medias);
};

function showWrapper() {
    if (document.getElementsByClassName('hidden')[0].style.display = "none") {
        document.getElementsByClassName('hidden')[0].style.display = "block"
    } else {
        document.getElementsByClassName('hidden')[0].style.display = "none"
    }   
};

init();
