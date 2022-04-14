function footerFactory(data) {
    const { price, likes } = data;

    //properties
    const mainDiv = document.createElement( 'div' );
    const div1 = document.createElement( 'div' );
    const div2 = document.createElement( 'div' );
    const p1 = document.createElement( 'p' );
    const p2 = document.createElement( 'p' );
    const iFull = document.createElement( 'i' );
    const likesCounter = document.querySelectorAll('.likesCounter');

    //configure elements
    mainDiv.setAttribute("class", "staticFooter")
    div1.setAttribute("class", "numberLikes")
    div2.setAttribute("class", "pricePerDay")
    iFull.setAttribute("class", "fa-solid fa-heart fullBlack");
    iFull.setAttribute("title", "Like");
    p1.setAttribute("id", "totalLikes");
    p1.textContent = likesCounter;
    p2.textContent = price + "€ / jour"

    //append elements
    mainDiv.appendChild(div1)
    mainDiv.appendChild(div2)
    div1.appendChild(p1)
    div1.appendChild(iFull)
    div2.appendChild(p2)

    return(mainDiv)
}