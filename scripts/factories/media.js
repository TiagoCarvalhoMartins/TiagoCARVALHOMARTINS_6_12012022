function mediaFactory(data) {
    const { image } = data;

    const picture = `assets/photographers/Ellie Rose/${image}`;

    function getMediaCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        article.appendChild(img);
        return (article);
    }
    return { picture, getMediaCardDOM }
}