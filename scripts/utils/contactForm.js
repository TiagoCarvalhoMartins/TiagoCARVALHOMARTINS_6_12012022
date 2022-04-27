function displayContactModal(data) {
    const { name } = data;
    const modal = document.getElementById("contact_modal");
    let contactButton = document.getElementsByClassName("contact_button")[0];
    const h2 = document.querySelector( '#contact_modal h2' );
    form = document.querySelector("form");
    h2.textContent = "Contactez-moi " + name
    const closeModal = document.getElementsByClassName("closeModal")[0]

    function addListener() {
        contactButton.addEventListener("click", _displayContactModal)
        closeModal.addEventListener("click", _closeModal)
    }

    function _displayContactModal() {
	    modal.style.display = "block";
    }
    function _closeModal() {
	    modal.style.display = "none";
    }

    return { addListener }
}

let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let message = document.getElementById("message");
let submitBtn = document.getElementsByClassName("submit_button")[0];

const formular = new Object();

firstName.addEventListener('change', function() {
    formular.firstName = firstName.value
})
lastName.addEventListener('change', function() {
    formular.lastName = lastName.value
})
email.addEventListener('change', function() {
    formular.email = email.value
})
message.addEventListener('change', function() {
    formular.message = message.value
})

submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(formular);
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
})

