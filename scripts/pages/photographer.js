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

//lightbox 

function addListener (medias) {
    let listenerModal = document.getElementById("articleMedia");
    listenerModal.addEventListener('click', function displayImgModal(event) {
        let currentImgTarget = event.currentTarget;
        let mediaID = currentImgTarget.dataset.id
        const media = medias.find (media => media.id == mediaID )
        const imgModal = document.querySelector(".articleMedia");
        const imgModel = modalFactory(media);
        const imgNav = imgModel.getLightboxModal();
        imgModal.appendChild(imgNav);
        document.getElementsByClassName('lightboxModal')[0].style.display = "flex";
    });
    const closeBtn = document.getElementsByClassName("fa-xmark")[0];
    closeBtn.forEach((cross) =>cross.addEventListener("click", closeLightbox));
    function closeLightbox() {
        document.getElementsByClassName('lightboxModal')[0] = "none";
    }
};



let mediaSort = []
let sortByDate = document.getElementById("date");
let sortByPopularity = document.getElementById("popularity");
let sortByTitle = document.getElementById("title");
let hiddenSort = document.getElementsByClassName('hidden')[0];

async function init() {
    // Récupère les datas des photographes
    const  { medias }  = await getMedias();
    const { photographers } = await getPhotographers();
    displayMedia(medias);
    displayHeader(photographers);
    addListener(medias);

    sortByDate.addEventListener('click', function () {
        mediaSort = medias.sort((a, b) => { 
            return new Date(a.date).valueOf() - new Date(b.date).valueOf();
        })
        hiddenSort.style.display = "none";
        displayMedia (mediaSort);
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
        displayMedia (mediaSort);
    });

    sortByPopularity.addEventListener('click', function () {
        mediaSort = medias.sort((a, b) => {  
            return b.likes - a.likes
        })
        hiddenSort.style.display = "none";
        displayMedia (mediaSort);
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
