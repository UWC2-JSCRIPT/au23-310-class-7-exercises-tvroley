const selectReasonEl = document.getElementById('contact-reason');
const codeLanguageEl = document.getElementById('code-language');
const websiteEl = document.getElementById('company-website');
const jobTitleEl = document.getElementById('job-title');

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

selectReasonEl.addEventListener('change', (e) => {
    handleselect(e.target);
});