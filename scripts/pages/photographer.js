async function getMedias() {
	// Penser à remplacer par les données récupérées dans le json
	let response = await fetch("https://tiagocarvalhomartins.github.io/TiagoCARVALHOMARTINS_6_12012022/data/photographers.json ")
	let myJSON = await response.json();
	   
	
	// et bien retourner le tableau photographers seulement une fois
	return (myJSON)
}

async function getPhotographers() {
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
    const photographe = photographers.find (photographer => photographer.id == getID() )
    const headerModel = headerFactory(photographe);
    const headerCardDOM = headerModel.getHeaderCardDOM();
    photographerHeader.appendChild(headerCardDOM);
    document.getElementsByClassName('header')[0].appendChild(  document.getElementsByClassName('contact_button')[0] )
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
    const { photographers } = await getPhotographers();
    displayMedia(medias);
    displayHeader(photographers);
};

function showWrapper() {
    if (document.getElementsByClassName('hidden')[0].style.display = "none") {
        document.getElementsByClassName('hidden')[0].style.display = "block"
    } else {
        document.getElementsByClassName('hidden')[0].style.display = "none"
    }   
};

let mediaSort = []

function sortDate(medias) {
    const  { medias }  = await getMedias();
    mediaSort = medias.sort((a, b) => { 
        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
    })
    document.getElementsByClassName('hidden')[0].style.display = "none";
}

function sortTitle(medias) {
    mediaSort = medias.sort((a, b) => { 
        return new Date(a.title).valueOf() - new Date(b.title).valueOf();
    })
    document.getElementsByClassName('hidden')[0].style.display = "none";
}

function sortPopularity(medias) {
    mediaSort = medias.sort((a, b) => { // SORT BY POPULARITY  
        return b.likes - a.likes
    })
    document.getElementsByClassName('hidden')[0].style.display = "none";
}
init();
