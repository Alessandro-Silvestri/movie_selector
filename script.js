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

// radio buttons

let radioButtonsList = document.getElementsByName('btnRadio');
for (let radio of radioButtonsList) {
        radio.addEventListener('change', (event) => {
                console.log(event.target.id);
        })
}