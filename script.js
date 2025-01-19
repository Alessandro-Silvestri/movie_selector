/*
MOVIE SELECTOR PROJECT 

*   carousel movies (possibly random images)
*   genre selector
*   dark mode option
*   subscribe
        (modal component with form)
*   movie cards
        (photo, title, genre, description)
*   accordion with 5 news about cinema (possibly dynamic with API)
*   footer

*/

// all the cards
let cards = document.getElementsByClassName('cardSelection');

// radio buttons
let radioButtonsList = document.getElementsByName('btnRadio');
for (let radio of radioButtonsList) {
        radio.addEventListener('change', (event) => {
                let radioChoice = event.target.id;
                for (let card of cards) {
                        if (radioChoice === 'all') {
                                for (let card_ of cards) {
                                        card_.parentElement.style.display = '';
                                }
                        }
                        else if (radioChoice === card.attributes.genre.value) {
                                card.parentElement.style.display = '';
                        }
                        else {
                                card.parentElement.style.display = 'none';
                        }
                }

        })
}

// dark mode
let darkMode = document.getElementById('darkMode');
let bodyTag = document.getElementsByTagName('body');
let radioButtonsNames = document.getElementsByClassName('btn-outline-primary');
let footer = document.getElementsByTagName('footer');

darkMode.addEventListener('click', () => {
        // card green, text white
        bodyTag[0].classList.toggle('bg-dark');
        for (let card of cards) {
                card.children[1].classList.toggle('bg-success');
                card.children[1].classList.toggle('text-light');
        }
        // radio buttons green
        for (let radio of radioButtonsNames) {
                radio.classList.toggle('btn-outline-success');
        }
        // border top to the footer
        footer[0].classList.toggle('border-top');
        footer[0].classList.toggle('border-success-subtle');
})

// form validator
function emailChecker(email) {
        if (!email.includes('.') || (!email.includes('@')) || (email.includes(' '))) {
                return false;
        }
        return true;
}

// function errorMessage(){
//         return `<strong class=''> </strong>`
// }


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
        event.preventDefault();
        // validate name
        if (!nameInput.value) {
                nameInput.classList.add('bg-danger');
                nameLabel.innerHTML = `Name <strong class="text-danger">wrong input</strong>`;
                console.log(nameLabel.innerHTML);
        }
        // validate email
        if (!emailChecker(emailInput.value)) {
                emailInput.classList.add('bg-danger');
                emailLabel.innerHTML = `Email address <strong class="text-danger">wrong input</strong>`;
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
        }
})


