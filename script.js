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


// card wrapper
let card1 = document.getElementById('card1');
card1.style.width = '18rem';
card1.classList.add('card');


// image
let image = document.createElement('img');
image.src = 'https://altadefinizione.prof/uploads/thumb/203x293-0-70/2025-01/1736608244-512450461.jpg';
image.classList.add('card-img-top');
card1.appendChild(image);

// div card-body
let divCardBody = document.createElement('div');
divCardBody.classList.add('card-body');

// p card-text
let cardText = document.createElement('p');
cardText.classList.add('card-text');
cardText.innerHTML = `<strong>SURVIVE</strong>
                  Trama: Una catastrofe scuote il pianeta: i poli magnetici
                  della Terra si sono invertiti e in questo mondo devastato una
                  famiglia deve lottare per la sopravvivenza. Quando i poli si
                  invertiranno di nuovo, sarà forse troppo tardi. <br />
                  <strong>Genre: action - 2024</strong>`

divCardBody.appendChild(cardText);
card1.appendChild(divCardBody);

console.log(card1);

