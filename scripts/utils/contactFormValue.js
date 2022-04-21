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