const selectReasonEl = document.getElementById('contact-reason');
const codeLanguageEl = document.getElementById('code-language');
const websiteEl = document.getElementById('company-website');
const jobTitleEl = document.getElementById('job-title');
const contactNameEl = document.getElementById("contact-name");
const emailFieldEl = document.getElementById("contact-email");
const messageEl = document.getElementById("message");
const contactForm = document.getElementById("contact-me-form");

const handleselect = (selectElement) => {
    const selectedValue = selectElement.value;
    if(selectedValue == 'Job opportunity') {
        codeLanguageEl.parentElement.classList.add('hidden');
        websiteEl.parentElement.classList.remove('hidden');
        jobTitleEl.parentElement.classList.remove('hidden');
    } else if(selectedValue == 'Talk code') {
        codeLanguageEl.parentElement.classList.remove('hidden');
        websiteEl.parentElement.classList.add('hidden');
        jobTitleEl.parentElement.classList.add('hidden');
    }
};

const validLength = (input, min) => {
    if(input.value.trim().length >= min) {
        input.parentElement.classList.remove("invalid");
        
        return true;
    } else {
        input.parentElement.classList.add("invalid");
        if(input.id === 'contact-name') {
            alert('name not long enough');
        } else if(input.id === 'message') {
            alert('message not long enough')
        }
        
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

contactForm.addEventListener("submit", (e) => {
    if (!(validLength(contactNameEl, 3) && validLength(messageEl, 10) && validateEmail(emailFieldEl))) {
        e.preventDefault();
    }
});

selectReasonEl.addEventListener('change', (e) => {
    handleselect(e.target);
});