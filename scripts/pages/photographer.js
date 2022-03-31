async function getMedias() {
	//Get JSON Medias
	let response = await fetch("https://tiagocarvalhomartins.github.io/TiagoCARVALHOMARTINS_6_12012022/data/photographers.json ")
	let myJSON = await response.json();
	   
	
	//return Array filtered with what is displayed
    const myJSONFiltered = myJSON.medias.filter (media => media.photographerId == getID() )
	return (myJSONFiltered)
}

async function getPhotographers() {
    //Get JSON photographers
    let response = await fetch("https://tiagocarvalhomartins.github.io/TiagoCARVALHOMARTINS_6_12012022/data/photographers.json ")
    let myJSON = await response.json();
       
    
    //return Array
    return (myJSON)
}

//get the photographer ID on URL
function getID() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const idPhotographer = urlParams.get("id")
    return (idPhotographer)
}

//display header created from factorie
async function displayHeader(photographer) {
    const photographerHeader = document.querySelector(".photograph-header");
    const headerModel = headerFactory(photographer);
    const headerCardDOM = headerModel.getHeaderCardDOM();
    photographerHeader.appendChild(headerCardDOM);
    document.getElementsByClassName('header')[0].appendChild(document.getElementsByClassName('contact_button')[0] )
};

//clean medias and after create them
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

function createLightbox () {

    const imgModal = document.getElementById("main");
    const imgNav = imgModel.getLightboxModal();
    imgModal.appendChild(imgNav);
    imgModel.addListener ();
}

let mediaSort = []
let sortByDate = document.getElementById("date");
let sortByPopularity = document.getElementById("popularity");
let sortByTitle = document.getElementById("title");
let hiddenSort = document.getElementsByClassName('hidden')[0];
btnSort= document.getElementsByClassName('sort-btn')[0];
const span = document.createElement( 'span' );
span.setAttribute("class", "fas fa-chevron-down");

//async function date() {
//    const medias = await getMedias();
//    mediaSort = medias
//    mediaSort = medias.sort((a, b) => { 
//        return new Date(a.date).valueOf() - new Date(b.date).valueOf();
//    })
//    hiddenSort.style.display = "none";
//    btnSort.textContent = "Date";
//    btnSort.appendChild(span);
//    displayMedia (mediaSort);
//    addIndex(mediaSort);
//    addListener(medias);
//}

async function init() {

    //find photographe
    const { photographers } = await getPhotographers();
    const photographer = photographers.find (photographer => photographer.id == getID() )

    // Récupère les datas des photographes
    const medias = await getMedias();
    mediaSort = medias

    //display
    displayMedia(medias);
    displayHeader(photographer);
    createLightbox();

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
 

function wrapper() {
    if (document.getElementsByClassName('hidden')[0].style.display = "none") {
        document.getElementsByClassName('hidden')[0].style.display = "block"
    } else {
        document.getElementsByClassName('hidden')[0].style.display = "none"
    }   
};




init();
