let article = document.getElementById("articleMedia")

function modalFactory(data) {
    const { image, photographerId, title } = data;
    const picture = `assets/photographers/${photographerId}/${image}`;

    function getLightboxModal() {
        const div = document.createElement( 'div' );
        const divNav = document.createElement( 'div' );
        const divNavClose = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        const span1 = document.createElement( 'span' );
        const span2 = document.createElement( 'span' );
        const span3 = document.createElement( 'span' );
        const h2 = document.createElement( 'h2' );
        div.setAttribute("class", "lightboxModal");
        divNavClose.setAttribute("class", "nav-close")
        divNav.setAttribute("class", "imageNavigation");
        img.setAttribute("src", picture);
        span1.setAttribute("class", "fas fa-chevron-left");
        span2.setAttribute("class", "fas fa-chevron-right");
        span3.setAttribute("class", "fa-solid fa-xmark");
        h2.textContent = title;

        div.appendChild(divNavClose);
        div.appendChild(h2);
        divNavClose.appendChild(divNav)
        divNavClose.appendChild(span3);
        divNav.appendChild(span1);
        divNav.appendChild(img);
        divNav.appendChild(span2);
        return (div);
        }
    return { picture, getLightboxModal }
}