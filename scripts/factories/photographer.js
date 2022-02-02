function photographerFactory(data) {
    const { name, portrait, city, country, tagline, id, price } = data;

    const picture = `assets/photographers/photographersID/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const div = document.createElement( 'div' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement( 'h3' );
        const h4 = document.createElement( 'h4' );
        const p = document.createElement( 'p' );
        const a = document.createElement('a');
        div.setAttribute("class", "link")
        img.setAttribute("src", picture)
        h2.textContent = name;
        h3.textContent = city+", " + country;
        h4.textContent = tagline;
        p.textContent = price + "€/jour";
        a.setAttribute("href", "photographer.html"+"?id="+id)
        article.appendChild(div)
        div.appendChild(a);
        a.appendChild(img);
        a.appendChild(h2);
        article.appendChild(h3)
        article.appendChild(h4)
        article.appendChild(p)
        return (article);
    }
    return { name, picture, city, country, tagline, id, price, getUserCardDOM }
}