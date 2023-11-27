const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const form = document.getElementById("connect-form");
const email = document.getElementById("email");

const validLength = (input, min) => {
    if(input.value.trim().length > min) {
        input.parentElement.classList.remove("invalid");
    } else {
        input.parentElement.classList.add("invalid");
    }
};