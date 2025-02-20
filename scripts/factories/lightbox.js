
function modalFactory() {

    //properties 
    const img = document.createElement( 'img' );
    const vid = document.createElement( 'video' );
    const src = document.createElement( 'source' );
    const h2 = document.createElement( 'h2' );

    //create empty lightbox
    function getLightboxModal() {

        //properties
        const div = document.createElement( 'div' );
        const divNav = document.createElement( 'div' );
        const divNavClose = document.createElement( 'div' );
        const divNavNextClose = document.createElement( 'div' );
        const button1 = document.createElement( 'button' );
        const button2 = document.createElement( 'button' );
        const button3 = document.createElement( 'button' );
        const span1 = document.createElement ('span');
        const span2 = document.createElement ('span');
        const span3 = document.createElement ('span');

        //configure elements
        div.setAttribute("class", "lightboxModal");
        div.setAttribute("role", "dialog");
        div.setAttribute("aria-describedby", "lightbox");
        divNavNextClose.setAttribute("class", "NextClose")
        divNavClose.setAttribute("class", "nav-close")
        divNav.setAttribute("class", "imageNavigation");
        span1.setAttribute("class", "fas fa-chevron-left");
        span1.setAttribute("title", "Bouton Précédent");
        button1.setAttribute("tabindex", "0");
        span2.setAttribute("class", "fas fa-chevron-right");
        span2.setAttribute("title", "Bouton Suivant");
        button2.setAttribute("tabindex", "0");
        span3.setAttribute("class", "fas fa-solid fa-xmark");
        span3.setAttribute("title", "Bouton Fermer");
        button3.setAttribute("tabindex", "0");
        button3.setAttribute("class", "close");
        img.setAttribute("class", "currentPicture");
        vid.setAttribute("class", "currentVideo");
        vid.setAttribute("controls", "true");
        h2.setAttribute("lang","en")

        //append elements
        div.appendChild(divNavClose);
        div.appendChild(h2);
        divNavClose.appendChild(divNav)
        divNavClose.appendChild(button3);
        button1.appendChild(span1)
        divNavNextClose.appendChild(button2)
        divNavNextClose.appendChild(button3)
        button2.appendChild(span2)
        button3.appendChild(span3)
        divNav.appendChild(button1);
        divNav.appendChild(img);
        divNav.appendChild(vid);
        divNav.appendChild(divNavNextClose);
        return (div);
    }

    

    //called after lightbox append on the body
    function addListener () {
        const closeBtn = document.querySelectorAll(".fa-xmark");
        closeBtn.forEach((cross) =>cross.addEventListener('click', _closeLightbox));

        let previous = document.getElementsByClassName('fa-chevron-left')[0];
        let next = document.getElementsByClassName('fa-chevron-right')[0];

        let listenerModal = document.querySelectorAll(".articleMedia");
        listenerModal.forEach (function (articleMedia) {
            articleMedia.addEventListener('click', _onclickOnArticle);
        }); 

        previous.addEventListener('click', _displayPrevious)
        next.addEventListener('click', _displayNext)  
    }

    //get current article, display lightbox, and hide main
    function _onclickOnArticle(event) {
        let currentImgTarget = event.currentTarget;
        let mediaID = currentImgTarget.dataset.id;
        let mediaIndex = currentImgTarget.dataset.index
        const media = mediaSort.find (media => media.id == mediaID )
        _displayLightbox ();
        _updateLightboxModal(media, mediaIndex);
        document.getElementById('main').style.display = "none"
        
    }

    //show lightbox
    function _displayLightbox() {
        document.getElementsByClassName('lightboxModal')[0].style.display = "flex";
    }

    //display image
    function _updateLightboxModal (data, index) {
        const { image, video, photographerId, title } = data;
        const picture = `assets/photographers/${photographerId}/${image}`;
        const videos = `assets/photographers/${photographerId}/${video}`;
    
        //display image or video
        if (data.image !== undefined) {
            img.setAttribute("src", picture);
            img.setAttribute("alt", title);
            img.setAttribute("data-index", index)
            h2.textContent = title;
            h2.setAttribute("class", "currentTitle");
            document.getElementsByClassName('currentPicture')[0].style.display = "block" 
            document.getElementsByClassName('currentVideo')[0].style.display = "none"    
        } if (data.video !== undefined) {
            src.setAttribute("src", videos);
            vid.setAttribute("data-index", index)
            vid.setAttribute("title", title)
            vid.appendChild(src);   
            h2.textContent = title;
            h2.setAttribute("class", "currentTitle");
            document.getElementsByClassName('currentVideo')[0].style.display = "block"
            document.getElementsByClassName('currentPicture')[0].style.display = "none"       
        }
    }

    //find previous image and update lightbox
    function _displayPrevious() {
        let mediaIndex = parseInt (img.dataset.index)
        let newIndex = mediaIndex - 1

        const media = mediaSort[newIndex];

        _updateLightboxModal (media, newIndex)
    }

    //find next image and update lightbox
    function _displayNext() {
        let mediaIndex = parseInt (img.dataset.index)
        let newIndex = mediaIndex + 1

        const media = mediaSort[newIndex];

        _updateLightboxModal (media, newIndex)
    }

    //keyboard navigation
    window.onkeyup = function (event) {
     if (event.keyCode == 27) {
        _closeLightbox();
     }
     if (event.keyCode == 39) {
        _displayNext();
     }
     if (event.keyCode == 37) {
        _displayPrevious();
     }
    }

    //close the lightbox and show main
    function _closeLightbox() {
        document.getElementsByClassName('lightboxModal')[0].style.display = "none";
        document.getElementById('main').style.display = "block"
    };

    




    return { getLightboxModal, addListener }
}