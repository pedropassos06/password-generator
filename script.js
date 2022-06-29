let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let passwordSize = document.querySelector("#size");
let password = document.querySelector("#password");

let passwordContainer = document.querySelector("#password-container");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!?@#";
let newPassword = "";

passwordSize.innerHTML = sliderElement.value;
sliderElement.oninput = function() {
    passwordSize.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; i++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    passwordContainer.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

function copyPassword() {
    navigator.clipboard.writeText(newPassword)
    .then(() => {
        alert("Text copied to clipboard");
    })
    .catch(() => {
        alert('Something went wrong', err);
    })
}


