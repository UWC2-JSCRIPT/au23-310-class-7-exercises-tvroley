const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const form = document.getElementById("connect-form");
const emailField = document.getElementById("email");

const validLength = (input, min) => {
    if(input.value.trim().length > min) {
        input.parentElement.classList.remove("invalid");
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        alert('name not long enough');
        return false;
    }
};

const validateEmail = (emailField) => {
    const re = /\w+@\w+\.\w+/;
    if(re.test(email.value.trim())) {
        emailField.parentElement.classList.remove("invalid");
        return true;
    } else {
        emailField.parentElement.classList.add("invalid");
        alert('invalid email format');
        return false;
    }
};

form.addEventListener("submit", (e) => {
    if (!(validLength(firstName, 3) && validLength(lastName, 3) && validateEmail(emailField))) {
        e.preventDefault();
        console.log("Bad input");
    }
});