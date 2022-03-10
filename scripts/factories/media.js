function mediaFactory(data) {
    const { image, title, likes, photographerId, id } = data;

    const picture = `assets/photographers/${photographerId}/${image}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const h2 = document.createElement( 'h2' );
        const p = document.createElement( 'p' );
        const div = document.createElement( 'div' );
        article.setAttribute("id", "articleMedia");
        img.setAttribute("src", picture);
        article.setAttribute("data-id", id);
        div.setAttribute("class", "description");
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