function displayContactModal(data) {
    const { name } = data;
    const modal = document.getElementById("contact_modal");
    let contactButton = document.getElementsByClassName("contact_button");
    const h2 = document.querySelector( 'h2' );
    form = document.querySelector("form");


    function addListener() {
        contactButton.addEventListener("click", _displayContactModal)
    }

    function _displayContactModal() {
        h2.textContent = "Contactez-moi" + name
	    modal.style.display = "block";
    }

    return { addListener }
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
