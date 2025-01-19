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
let subscribeButton = document.getElementById('subscribeButton');
let modalBg = document.getElementsByClassName('modal-content');

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

        // modal
        modalBg[0].classList.toggle('bg-dark');
        modalBg[0].classList.toggle('text-light');

        // modal button
        submitButton.classList.toggle('bg-success');
        submitButton.classList.toggle('text-light');

        // border top to the footer
        footer[0].classList.toggle('border-top');
        footer[0].classList.toggle('border-success-subtle');

        subscribeButton.classList.toggle('bg-success');
        subscribeButton.classList.toggle('text-light');
})



