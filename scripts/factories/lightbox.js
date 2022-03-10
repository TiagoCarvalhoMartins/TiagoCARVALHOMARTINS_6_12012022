let article = document.getElementById("articleMedia")

function modalFactory() {
    //const { image, photographerId, title } = data;
    //const picture = `assets/photographers/${photographerId}/${image}`;
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

        function updateLightboxModal (data) {
            const { image, photographerId, title } = data;
            const picture = `assets/photographers/${photographerId}/${image}`;
    
            img.setAttribute("src", picture);
            img.setAttribute("class", "currentPicture");
            h2.textContent = title;
            h2.setAttribute("class", "currentTitle");
        }

    return { getLightboxModal, updateLightboxModal }
}