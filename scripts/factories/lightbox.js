
function modalFactory() {

    //properties 
    const img = document.createElement( 'img' );
    const vid = document.createElement( 'video' );
    const src = document.createElement( 'source' );
    const h2 = document.createElement( 'h2' );

    //create empty lightbox
    function getLightboxModal() {
        const div = document.createElement( 'div' );
        const divNav = document.createElement( 'div' );
        const divNavClose = document.createElement( 'div' );
        const button1 = document.createElement( 'button' );
        const button2 = document.createElement( 'button' );
        const button3 = document.createElement( 'button' );
        div.setAttribute("class", "lightboxModal");
        div.setAttribute("role", "dialog");
        div.setAttribute("aria-describedby", "lightbox");
        divNavClose.setAttribute("class", "nav-close")
        divNav.setAttribute("class", "imageNavigation");
        button1.setAttribute("class", "fas fa-chevron-left");
        button1.setAttribute("aria-label", "Précédent");
        button2.setAttribute("class", "fas fa-chevron-right");
        button2.setAttribute("aria-label", "Suivant");
        button3.setAttribute("class", "fa-solid fa-xmark");
        button3.setAttribute("aria-label", "Fermer");
        img.setAttribute("class", "currentPicture");
        vid.setAttribute("class", "currentVideo");
        vid.setAttribute("controls", "true")

        div.appendChild(divNavClose);
        div.appendChild(h2);
        divNavClose.appendChild(divNav)
        divNavClose.appendChild(button3);
        divNav.appendChild(button1);
        divNav.appendChild(img);
        divNav.appendChild(vid);
        divNav.appendChild(button2);
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

    //get current article and display lightbox
    function _onclickOnArticle(event) {
        let currentImgTarget = event.currentTarget;
        let mediaID = currentImgTarget.dataset.id;
        let mediaIndex = currentImgTarget.dataset.index
        const media = mediaSort.find (media => media.id == mediaID )
        _displayLightbox ();
        _updateLightboxModal(media, mediaIndex);
    }

    //show lightbox
    function _displayLightbox() {
        document.getElementsByClassName('lightboxModal')[0].style.display = "flex";
        document.getElementsByClassName('photograph-header')[0].setAttribute("aria-hidden", "true")
        document.getElementsByClassName('wrapper')[0].setAttribute("aria-hidden", "true")
        document.getElementsByClassName('media')[0].setAttribute("aria-hidden", "true")
        document.getElementsByClassName('articleMedia')[0].setAttribute("aria-hidden", "true")
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



    //close the lightbox
    function _closeLightbox() {
        document.getElementsByClassName('lightboxModal')[0].style.display = "none";
        document.getElementsByClassName('photograph-header')[0].setAttribute("aria-hidden", "false")
        document.getElementsByClassName('wrapper')[0].setAttribute("aria-hidden", "false")
        document.getElementsByClassName('media')[0].setAttribute("aria-hidden", "false")
        document.getElementsByClassName('articleMedia')[0].setAttribute("aria-hidden", "false")
    };

    




    return { getLightboxModal, addListener }
}