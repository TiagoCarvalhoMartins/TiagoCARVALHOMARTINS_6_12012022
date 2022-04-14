function mediaFactory(data) {
    const { image, video, title, likes, photographerId, id } = data;

    const picture = `assets/photographers/${photographerId}/${image}`;
    const videos = `assets/photographers/${photographerId}/${video}`;

    const iFull = document.createElement( 'i' );
    const iEmpty = document.createElement( 'i' );
    const p = document.createElement( 'p' );
    let numberLikes = data.likes

    function getMediaCardDOM(index) {
        
        //create elements
        const article = document.createElement( 'article' );
        const a = document.createElement( 'a' );
        const img = document.createElement( 'img' );
        const vid = document.createElement( 'video' );
        const src = document.createElement( 'source' );
        src.type = "video/mp4";
        const h2 = document.createElement( 'h2' );
        const div1 = document.createElement( 'div' );
        const div2 = document.createElement( 'div' );
        const button = document.createElement( 'button' );

        //configure elements
        article.setAttribute("class", "articleMedia");
        a.setAttribute("class", "openLightbox");
        a.setAttribute("href", "#");
        a.setAttribute("lang","en")
        button.setAttribute("class", "fa-stack");
        button.setAttribute("aria-label", "liker");
        article.setAttribute("data-id", id);
        article.setAttribute("data-index", index);
        div1.setAttribute("class", "description");
        div2.setAttribute("class", "likes");
        iFull.setAttribute("class", "fa-solid fa-heart fa-stack-1x full");
        iFull.setAttribute("title", "Bouton Like");
        iEmpty.setAttribute("class", "fa-regular fa-heart fa-stack-1x empty");
        iEmpty.setAttribute("title", "Bouton Unlike");
        h2.textContent = title;
        h2.setAttribute("lang","en")
        p.setAttribute("class", "likesCounter")
        p.textContent = likes;

        //append elements
        article.appendChild(a);
        a.appendChild(div1);
        div1.appendChild(h2);
        div1.appendChild(div2);
        div2.appendChild(p)
        div2.appendChild(iEmpty);
        div2.appendChild(iFull);
        

        //display image or video
        if (data.image !== undefined) {
            img.setAttribute("src", picture);
            img.setAttribute("class", "openModal");
            img.setAttribute("alt", title);
            a.appendChild(img);    
        } if (data.video !== undefined) {
            vid.setAttribute("class", "video");
            vid.setAttribute("title", title);
            src.setAttribute("src", videos);
            a.appendChild(vid);
            vid.appendChild(src);          
        }

        return (article);
    }

    //like button
    function likeButton () {
    
        iEmpty.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            iEmpty.style.display = "none"
            iFull.style.display = "block"
            numberLikes += 1
            p.textContent = numberLikes;
        })
    
        iFull.addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            iEmpty.style.display = "block"
            iFull.style.display = "none"
            numberLikes -= 1
            p.textContent = numberLikes;
        })
    }



    return { picture, videos, getMediaCardDOM, likeButton }

}