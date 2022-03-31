function headerFactory(data) {
    const { name, portrait, city, country, tagline } = data;

    const picture = `assets/photographers/photographersID/${portrait}`;

    function getHeaderCardDOM() {
        const article = document.createElement( 'article' );
        article.setAttribute("class", "header");
        const div = document.createElement( 'div' );
        div.setAttribute("class", "photograph-description");
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        const h2 = document.createElement ( 'h2' );
        h2.textContent = city + ", " + country;
        const p = document.createElement ( 'p' );
        p.textContent = tagline;
        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(p);
        return (article);
    }
    async function displayHeader(photographer) {
        const photographerHeader = document.querySelector(".photograph-header");
        const headerModel = headerFactory(photographer);
        const headerCardDOM = headerModel.getHeaderCardDOM();
        photographerHeader.appendChild(headerCardDOM);
        document.getElementsByClassName('header')[0].appendChild(document.getElementsByClassName('contact_button')[0] )
    };

    return { name, picture, city, country, tagline, getHeaderCardDOM, displayHeader }
}