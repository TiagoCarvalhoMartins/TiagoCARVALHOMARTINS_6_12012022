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
    photographerMedia.innerHTML = "";

    medias.forEach((media) => {
        if (getID() == media.photographerId) {
            const mediaModel = mediaFactory(media);
            const mediaCardDOM = mediaModel.getMediaCardDOM();
            photographerMedia.appendChild(mediaCardDOM);
        }
    });
};

//lightbox 

const imgModel = modalFactory()

function createLightbox () {

    const imgModal = document.querySelector(".articleMedia");
    const imgNav = imgModel.getLightboxModal();
    imgModal.appendChild(imgNav);
    
}

function addListener (medias) {
    let listenerModal = document.getElementById("articleMedia");
    listenerModal.addEventListener('click', function displayImgModal(event) {
        let currentImgTarget = event.currentTarget;
        let mediaID = currentImgTarget.dataset.id
        const media = medias.find (media => media.id == mediaID )
        imgModel.updateLightboxModal(media);
        document.getElementsByClassName('lightboxModal')[0].style.display = "flex";
    });
    const closeBtn = document.querySelectorAll("fa-xmark");
    closeBtn.forEach((cross) =>cross.addEventListener('click', closeLightbox));
    function closeLightbox() {
        document.getElementsByClassName('lightboxModal')[0].style.display = "none";
    };

    let previous = document.getElementsByClassName('fa-chevron-left')[0];
    let next = document.getElementsByClassName('fa-chevron-right')[0];
    let lightBoxMedia = document.getElementsByClassName("currentPicture")[0];
    let lightBoxName = document.getElementsByClassName("currentTitle")[0];

    previous.addEventListener('click', function () {
        mediaSort.currentIndex -= -1;

        if (mediaSort.currentIndex < 0) {
            mediaSort.currentIndex = id.length - 1;
            mediaSort.currentIndex = title.length - 1;
        }
        let src = id[mediaSort.currentIndex];
        let titleSrc = title[mediaSort.currentIndex];

        lightBoxMedia.innerHTML = `${src}`;
        lightBoxName.innerHTML = `${titleSrc}`;
    })  
    next.addEventListener('click', function () {
        mediaSort.currentIndex -= +1;
    
        if (mediaSort.currentIndex < 0) {
            mediaSort.currentIndex = id.length - 1;
            mediaSort.currentIndex = title.length - 1;
        }
        let src = id[mediaSort.currentIndex];
        let titleSrc = title[mediaSort.currentIndex];
    
        lightBoxMedia.innerHTML = `${src}`;
        lightBoxName.innerHTML = `${titleSrc}`;
    })
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
    });

    sortByPopularity.addEventListener('click', function () {
        mediaSort = medias.sort((a, b) => {  
            return b.likes - a.likes
        })
        hiddenSort.style.display = "none";
        btnSort.textContent = "Popularité";
        btnSort.appendChild(span);
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
