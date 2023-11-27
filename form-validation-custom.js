const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const form = document.getElementById("connect-form");
const emailField = document.getElementById("email");

const validLength = (input, min) => {
    if(input.value.trim().length > min) {
        input.parentElement.classList.remove("invalid");
    } else {
        input.parentElement.classList.add("invalid");
    }
};

const validateEmail = (emailField) => {
    const re = /\w+@\w+\.\w+/;
    if(re.test(email.value.trim())) {
        emailField.parentElement.classList.remove("invalid");
    } else {
        emailField.parentElement.classList.add("invalid");
    }
};

form.addEventListener("submit", (e) => {
    //default behavior not stopping without this before the validation
    e.preventDefault();
    if (!!(validLength(firstName, 3) + validLength(lastName, 3) + validateEmail(emailField))) {
        e.preventDefault();
    }
});