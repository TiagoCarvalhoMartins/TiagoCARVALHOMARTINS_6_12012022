function headerFactory(data) {
    const { name, portrait, city, country, tagline } = data;

    const picture = `assets/photographers/photographersID/${portrait}`;

    function getHeaderCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h1 = document.createElement( 'h1' );
        h1.textContent = name;
        const h2 = document.createElement ( 'h2' );
        h2.textContent = city + ", " + country;
        const p = document.createElement ( 'p' );
        p.textContent = tagline;
        article.appendChild(img);
        article.appendChild(h1);
        article.appendChild(p);
        return (article);
    }
    return { name, picture, city, country, tagline, getHeaderCardDOM }
}