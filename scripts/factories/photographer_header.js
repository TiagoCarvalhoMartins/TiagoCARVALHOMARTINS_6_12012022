function headerFactory(data) {
    const { name, portrait, city, country, tagline } = data;

    const picture = `assets/photographers/photographersID/${portrait}`;

    function getHeaderCardDOM() {

        ////create elements
        const article = document.createElement( 'article' );
        const div = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        const h1 = document.createElement( 'h1' );
        const h2 = document.createElement ( 'h2' );
        const p = document.createElement ( 'p' );

        //configure elements
        article.setAttribute("class", "header");
        div.setAttribute("class", "photograph-description");
        img.setAttribute("src", picture);
        h1.textContent = name;
        h2.textContent = city + ", " + country;
        p.textContent = tagline;

        //append elements
        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(h1);
        div.appendChild(h2);
        div.appendChild(p);
        return (article);
    }

    return { name, picture, city, country, tagline, getHeaderCardDOM, displayHeader }
}