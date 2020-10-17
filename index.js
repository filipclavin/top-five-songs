/* Fades elements in as they eneter the viewport. Based on https://www.dev-tips-and-tricks.com/animate-elements-scrolled-view-vanilla-js */

(function() {
    var elements
    var windowHeight
  
    function init() {
      elements = document.querySelectorAll('.hidden')
      windowHeight = window.innerHeight
    }
  
    function checkPosition() {
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i]
        var positionFromTop = elements[i].getBoundingClientRect().top
        var positionFromBottom = elements[i].getBoundingClientRect().bottom
  
        if (positionFromTop <= windowHeight) {
          element.classList.add("fade-in-element")
          element.classList.remove("hidden")
        } else if (positionFromTop > windowHeight) {
            element.classList.add("hidden")
            element.classList.remove("fade-in-element" || positionFromBottom <= 0)
        }
      }
    }
  
    window.addEventListener("scroll", checkPosition)
    window.addEventListener("resize", init)
  
    init()
    checkPosition()
})()
  

/* Form validation, based on https://www.youtube.com/watch?v=In0nB0ABaUk */

const name = document.getElementById("name")
const mail = document.getElementById("mail")
const message = document.getElementById("message")
const form = document.getElementById("form")
const errorElement = document.getElementById("error")

form.addEventListener("submit", (e) => {
    let errors = []
    if (name.value === "" || name.value == null) {
        errors.push("<p id=\'name-error\'>Please enter a name.</p>")
        name.classList.add("bad-input")
    } else {
        name.classList.remove("bad-input")
    }

    if (mail.value === "" || mail.value == null) {
        errors.push("<p id=\'mail-error\'>Please enter an e-mail address.</p>")
        mail.classList.add("bad-input")
    } else if (mail.validity.typeMismatch) {
        errors.push("<p id=\'mail-error\'>You have not entered a valid e-mail adress.</p>")
        mail.classList.add("bad-input")
    } else {
        mail.classList.remove("bad-input")
    }

    if (message.value === "" || message.value == null) {
        errors.push("<p id=\'message-error\'>Please enter a message.</p>")
        message.classList.add("bad-input")
    } else {
        message.classList.remove("bad-input")
    }

    if (errors.length > 0) {
        e.preventDefault()
        errorElement.classList.add("active")
        errorElement.innerHTML = errors.join("")
    }
})

