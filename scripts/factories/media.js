function mediaFactory(data) {
    const { image, title, likes } = data;

    const picture = `assets/photographers/Tracy/${image}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const p = document.createElement( 'p' );
        const div = document.createElement( 'div' );
        img.setAttribute("src", picture)
        div.setAttribute("class", "description")
        h2.textContent = title;
        p.textContent = likes;
        article.appendChild(img);
        article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);
        return (article);
    }
    return { picture, getMediaCardDOM }
}