// form validator
function emailChecker(email) {
    if (!email.includes('.') || (!email.includes('@')) || (email.includes(' '))) {
            return false;
    }
    return true;
}

let formTag = document.getElementsByTagName('form');
let nameLabel = document.getElementById('nameLabel');
let nameInput = document.getElementById('nameInput');
let emailLabel = document.getElementById('emailLabel');
let emailInput = document.getElementById('emailInput');
let checksLabel = document.getElementById('checksLabel');
let checkboxesList = document.getElementsByClassName('form-check-input');
let submitButton = document.getElementById('submitButton');

// on focus the red disappears in the fields: 'name' and 'email' and 'wrong input on the label' 
nameInput.addEventListener('focus', () => {
    nameInput.classList.remove('bg-danger');
    nameLabel.innerHTML = "Name";
})

emailInput.addEventListener('focus', () => {
    emailInput.classList.remove('bg-danger');
    emailLabel.innerHTML = "Email address";
})

for (let check of checkboxesList) {
    check.addEventListener('focus', () =>{
            checksLabel.innerHTML = "Choose at least 3 genres";
    })
}

submitButton.addEventListener('click', (event) => {
    let isValidate = true;
    event.preventDefault();
    // validate name
    if (!nameInput.value) {
            nameInput.classList.add('bg-danger');
            nameLabel.innerHTML = `Name <strong class="text-danger">wrong input</strong>`;
            isValidate = false;
    }
    // validate email
    if (!emailChecker(emailInput.value)) {
            emailInput.classList.add('bg-danger');
            emailLabel.innerHTML = `Email address <strong class="text-danger">wrong input</strong>`;
            isValidate = false;
    }
    // loop to count ho many checks are selected
    let checked = 0;
    for (let checkInput of checkboxesList) {
            if (checkInput.checked) {
                    checked++;
            }
    }
    if (checked < 3) {
            checksLabel.innerHTML = `Choose at least 3 genres <strong class="text-danger">choose more please</strong>`
            isValidate = false;
    }
    if (isValidate){
           formTag[0].submit();
    }
})