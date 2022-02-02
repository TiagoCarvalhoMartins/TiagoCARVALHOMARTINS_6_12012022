async function getMedias() {
	// Penser à remplacer par les données récupérées dans le json
	let response = await fetch("../../data/photographers.json")
	let myJSON = await response.json();
	   
	
	// et bien retourner le tableau photographers seulement une fois
	return (myJSON)
}

async function displayMedia(medias) {
    const photographerMedia = document.querySelector(".media");

    medias.forEach((media) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM();
        photographerMedia.appendChild(mediaCardDOM);
    });
};

async function init() {
    // Récupère les datas des photographes
    const  { medias }  = await getMedias();
    displayMedia(medias);
};

init();