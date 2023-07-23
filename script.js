const form       = document.querySelector("form")
const emailField = form.querySelector(".email")
const emailInput = emailField.querySelector("input")
const passField  = form.querySelector(".password")
const passInput  = passField.querySelector("input")

form.onsubmit = e => {
    e.preventDefault()
    if (emailInput.value == ''){
        emailField.classList.add("shake", "error")
    }else {
        checkEmail()
    }
    if (passInput.value == ''){
        passField.classList.add("shake", "error")
    }

    setTimeout(() => {
        emailField.classList.remove("shake")
        passField.classList.remove("shake")
    }, 500)

    /*
    emailInput.onkeyup = () => {
        checkEmail()
    }
    */

    if (!emailField.classList.contains("error") && !passField.classList.contains("error")){
        window.location.href = '#'
    }
}

function checkEmail() {
    let pattern = /^[^]+@[^]+\.[a-z]{2,3}$/
    if(!emailInput.value.match(pattern)){
        emailField.classList.add("error")
        let errorText = emailField.querySelector(".error-text")
        errorText.innerText = (emailInput.value != "") ? "Enter a valid email address" : "Email can't be blank";
    }else{
        emailField.classList.remove("error")
    }
}

passInput.onkeyup = () => {
    if(passInput == ''){
        passField.classList.add("error")
    }else{
        passField.classList.remove("error")
    }
}