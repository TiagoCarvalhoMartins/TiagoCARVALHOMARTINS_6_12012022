async function getMedias() {
	// Penser à remplacer par les données récupérées dans le json
	let response = await fetch("https://tiagocarvalhomartins.github.io/TiagoCARVALHOMARTINS_6_12012022/data/photographers.json ")
	let myJSON = await response.json();
	   
	
	// et bien retourner le tableau photographers seulement une fois
    const myJSONFiltered = myJSON.medias.filter (media => media.photographerId == getID() )
	return (myJSONFiltered)
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


function displayMedia(medias) {
    const photographerMedia = document.querySelector(".media");
    photographerMedia.innerHTML = "";

    medias.forEach((media, index) => {
        const mediaModel = mediaFactory(media);
        const mediaCardDOM = mediaModel.getMediaCardDOM(index);
        photographerMedia.appendChild(mediaCardDOM);
    });
};


//lightbox 

const imgModel = modalFactory()

function showMedia () {
    
}

function createLightbox () {

    const imgModal = document.getElementById("main");
    const imgNav = imgModel.getLightboxModal();
    imgModal.appendChild(imgNav);
    imgModel.addListener ();
}

function addListener (medias) {
    let listenerModal = document.querySelectorAll(".articleMedia");
    listenerModal.forEach (function (articleMedia) {
        articleMedia.addEventListener('click', function displayImgModal(event) {
            let currentImgTarget = event.currentTarget;
            let mediaID = currentImgTarget.dataset.id;
            let mediaIndex = currentImgTarget.dataset.index
            const media = medias.find (media => media.id == mediaID )
            imgModel.updateLightboxModal(media, mediaIndex);
            document.getElementsByClassName('lightboxModal')[0].style.display = "flex";
        });
    });
}

let mediaSort = []
let sortByDate = document.getElementById("date");
let sortByPopularity = document.getElementById("popularity");
let sortByTitle = document.getElementById("title");
let hiddenSort = document.getElementsByClassName('hidden')[0];

async function init() {
    // Récupère les datas des photographes
    const medias = await getMedias();
    let mediaSort = medias
    const { photographers } = await getPhotographers();
    displayMedia(medias);
    displayHeader(photographers);
    createLightbox(medias);
    addListener(medias);

    btnSort= document.getElementsByClassName('sort-btn')[0];
    const span = document.createElement( 'span' );
    span.setAttribute("class", "fas fa-chevron-down");
    sortByDate.addEventListener('click', function () {
        mediaSort = medias.sort((a, b) => { 
            return new Date(a.date).valueOf() - new Date(b.date).valueOf();
        })
        hiddenSort.style.display = "none";
        btnSort.textContent = "Date";
        btnSort.appendChild(span);
        displayMedia (mediaSort);
        addIndex(mediaSort);
        addListener(medias);
    });

    sortByTitle.addEventListener('click', function () {
        mediaSort = medias.sort((a, b) => { 
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            }
        });
        hiddenSort.style.display = "none";
        btnSort.textContent = "Titre";
        btnSort.appendChild(span);
        displayMedia (mediaSort);
        addIndex(mediaSort);
        addListener(medias);
    });

    sortByPopularity.addEventListener('click', function () {
        mediaSort = medias.sort((a, b) => {  
            return b.likes - a.likes
        })
        hiddenSort.style.display = "none";
        btnSort.textContent = "Popularité";
        btnSort.appendChild(span);
        displayMedia (mediaSort);
        addIndex(mediaSort);
        addListener(medias);
    });
};
 

function showWrapper() {
    if (document.getElementsByClassName('hidden')[0].style.display = "none") {
        document.getElementsByClassName('hidden')[0].style.display = "block"
    } else {
        document.getElementsByClassName('hidden')[0].style.display = "none"
    }   
};




init();
