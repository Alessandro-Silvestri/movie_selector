/*
MOVIE SELECTOR PROJECT 

*   navbar with genre
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
// console.log(cards[0].attributes.genre.value);




// radio buttons
let radioButtonsList = document.getElementsByName('btnRadio');
for (let radio of radioButtonsList) {
        radio.addEventListener('change', (event) => {
                let radioChoice = event.target.id;
                for (let card of cards){
                        if (radioChoice === 'all'){
                                for (let card_ of cards){
                                        card_.parentElement.style.display = '';
                                }
                        }
                        else if (radioChoice === card.attributes.genre.value){
                                card.parentElement.style.display = '';
                        }
                        else {
                                card.parentElement.style.display = 'none'; 
                        }
                }

        })
}



// card4.parentElement.style.display = 'none';
// card4.parentElement.style.display = '';

