function mediaFactory(data) {
    const { image, video, title, likes, photographerId, id } = data;

    const picture = `assets/photographers/${photographerId}/${image}`;
    const videos = `assets/photographers/${photographerId}/${video}`;


    function getMediaCardDOM(index) {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        const vid = document.createElement( 'video' );
        const src = document.createElement( 'source' );
        src.type = "video/mp4";
        const h2 = document.createElement( 'h2' );
        const p = document.createElement( 'p' );
        const div = document.createElement( 'div' );
        const span = document.createElement( 'span' );
        const iFull = document.createElement( 'i' );
        const iEmpty = document.createElement( 'i' );
        article.setAttribute("class", "articleMedia");
        vid.setAttribute("id", "video")
        span.setAttribute("class", "fa-stack");
        img.setAttribute("src", picture);
        img.setAttribute("class", "openModal");
        src.setAttribute("src", videos);
        article.setAttribute("data-id", id);
        article.setAttribute("data-index", index);
        div.setAttribute("class", "description");
        iFull.setAttribute("class", "fa-solid fa-heart fa-stack-1x full");
        iEmpty.setAttribute("class", "fa-regular fa-heart fa-stack-1x empty");
        h2.textContent = title;
        p.textContent = likes;

        function showArticle() {
            if (data.image !== undefined) {
                article.appendChild(img);
                article.appendChild(div);
                div.appendChild(h2);
                div.appendChild(p);
                p.appendChild(span);
                span.appendChild(iEmpty);
                span.appendChild(iFull);
                return (article);
            } if (data.video !== undefined) {
                article.appendChild(vid);
                vid.appendChild(src);
                article.appendChild(div);
                div.appendChild(h2);
                div.appendChild(p);
                p.appendChild(span);
                span.appendChild(iEmpty);
                span.appendChild(iFull);
                return (article);
            }
        }

        //return (article);
    }

    function likeButton () {
        let full = document.getElementsByClassName('full')[0];
        let empty = document.getElementsByClassName('empty')[0];
        let { likes } = medias;
    
        empty.addEventListener('click', function (event) {
            event.stopPropagation();
            empty.display.style = "none"
            full.display.style = "block"
            likes + 1
    
        })
    
        full.addEventListener('click', function (event) {
            event.stopPropagation();
            empty.display.style = "block"
            full.display.style = "none"
            likes - 1
    
        })
    }



    return { picture, videos, getMediaCardDOM, likeButton }

}