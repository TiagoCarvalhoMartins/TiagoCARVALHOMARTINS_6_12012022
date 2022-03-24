
function modalFactory() {
    const img = document.createElement( 'img' );
    const h2 = document.createElement( 'h2' );

    function getLightboxModal() {
        const div = document.createElement( 'div' );
        const divNav = document.createElement( 'div' );
        const divNavClose = document.createElement( 'div' );
        const span1 = document.createElement( 'span' );
        const span2 = document.createElement( 'span' );
        const span3 = document.createElement( 'span' );
        div.setAttribute("class", "lightboxModal");
        divNavClose.setAttribute("class", "nav-close")
        divNav.setAttribute("class", "imageNavigation");
        //img.setAttribute("src", picture);
        span1.setAttribute("class", "fas fa-chevron-left");
        span2.setAttribute("class", "fas fa-chevron-right");
        span3.setAttribute("class", "fa-solid fa-xmark");
        //h2.textContent = title;

        div.appendChild(divNavClose);
        div.appendChild(h2);
        divNavClose.appendChild(divNav)
        divNavClose.appendChild(span3);
        divNav.appendChild(span1);
        divNav.appendChild(img);
        divNav.appendChild(span2);
        return (div);
    }

    function updateLightboxModal (data, index) {
        const { image, photographerId, title } = data;
        const picture = `assets/photographers/${photographerId}/${image}`;
    
        img.setAttribute("src", picture);
        img.setAttribute("data-index", index)
        img.setAttribute("class", "currentPicture");
        h2.textContent = title;
        h2.setAttribute("class", "currentTitle");
    }

    function addListener () {
        const closeBtn = document.querySelectorAll(".fa-xmark");
        closeBtn.forEach((cross) =>cross.addEventListener('click', closeLightbox));
        function closeLightbox() {
            document.getElementsByClassName('lightboxModal')[0].style.display = "none";
        };

        let previous = document.getElementsByClassName('fa-chevron-left')[0];
        let next = document.getElementsByClassName('fa-chevron-right')[0];
        let lightBoxName = document.getElementsByClassName("currentTitle")[0];

        previous.addEventListener('click', function () {
            let mediaIndex = img.dataset.index
            let newIndex = mediaIndex + 1
            //if (mediaSort.currentIndex < 0) {
            //    mediaSort.currentIndex = id.length - 1;
            //    mediaSort.currentIndex = title.length - 1;
            //}
            const {photographerId, title, image} = mediaSort[newIndex];

            img.setAttribute ("src", `assets/photographers/${photographerId}/${image}`);
            //lightBoxName.innerHTML = `${title}`;
        })  
        next.addEventListener('click', function () {
            mediaSort.dataset.index -= +1;
        
            if (mediaSort.currentIndex < 0) {
                mediaSort.currentIndex = id.length - 1;
                mediaSort.currentIndex = title.length - 1;
            }
            let src = id[mediaSort.currentIndex];
            let titleSrc = title[mediaSort.currentIndex];
        
            lightBoxMedia.innerHTML = `${src}`;
            lightBoxName.innerHTML = `${titleSrc}`;
        })
    }




    return { getLightboxModal, updateLightboxModal, addListener }
}