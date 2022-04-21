function footerFactory(data) {
    const { price } = data;

    //properties
    const mainDiv = document.createElement( 'div' );
    const div1 = document.createElement( 'div' );
    const div2 = document.createElement( 'div' );
    const p1 = document.createElement( 'p' );
    const p2 = document.createElement( 'p' );
    const iFull = document.createElement( 'i' );
    const likeEmpty = document.querySelectorAll(".empty");
    const likeFull = document.querySelectorAll(".full");
    let totalLikes = mediaSort.reduce(function(totalLikes, current) {
        return totalLikes + current.likes;
      }, 0);

    //configure elements
    mainDiv.setAttribute("class", "staticFooter")
    div1.setAttribute("class", "numberLikes")
    div2.setAttribute("class", "pricePerDay")
    iFull.setAttribute("class", "fa-solid fa-heart fullBlack");
    iFull.setAttribute("title", "Like");
    p1.setAttribute("id", "totalLikes");
    p1.textContent = totalLikes;
    p2.textContent = price + "€ / jour"

    //append elements
    mainDiv.appendChild(div1)
    mainDiv.appendChild(div2)
    div1.appendChild(p1)
    div1.appendChild(iFull)
    div2.appendChild(p2)

    //update like meter listener
    function _addLikes() {
      totalLikes += 1
      p1.textContent = totalLikes;
    }

    function _deductLikes() {
      totalLikes -= 1
      p1.textContent = totalLikes;
    }

    likeEmpty.forEach((likeButton) =>likeButton.addEventListener('click', _addLikes))
    likeFull.forEach((likeButton) =>likeButton.addEventListener('click', _deductLikes))


    return(mainDiv)
}