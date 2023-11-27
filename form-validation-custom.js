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

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validLength(firstName, 3);
    validLength(lastName, 3);
});