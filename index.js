const name = document.getElementById("name")
const mail = document.getElementById("mail")
const message = document.getElementById("message")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", (e) => {
    let errors = []
    if (name.value === "" || name.value == null) {
        errors.push("Please enter a name.")
        name.classList.add("bad-input")
    }

    if (mail.value === "" || mail.value == null) {
        errors.push("Please enter an e-mail address.")
        mail.classList.add("bad-input")
    } else if (mail.validity.typeMismatch) {
        errors.push("You have not entered a valid e-mail adress.")
        mail.classList.add("bad-input")
    }

    if (message.value === "" || message.value == null) {
        errors.push("Please enter a message.")
        message.classList.add("bad-input")
    }

    if (errors.length > 0) {
        e.preventDefault()
        errorElement.classList.add("active")
        errorElement.innerHTML = errors.join("<br>")
    }
})