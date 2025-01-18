function cardMaker(idCard, title, imgSrc, text, genre, year) {
    // card wrapper
    let card = document.getElementById(idCard);
    card.style.width = '18rem';
    card.classList.add('card');
    card.setAttribute('genre', genre);
    // image
    let image = document.createElement('img');
    image.src = imgSrc;
    image.classList.add('card-img-top');
    card.appendChild(image);
    // div card-body
    let divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');
    // p card-text
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.innerHTML = `<strong>${title}</strong> - ${text} <strong>${genre} ${year}</strong>`
    divCardBody.appendChild(cardText);
    card.appendChild(divCardBody);
    return card
}

let card1 = cardMaker('card1',
    'Back in Action',
    'img/back_action.jpg', `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi. `,
    'action',
    2000);

let card2 = cardMaker('card2',
    'Buffalo kids',
    'img/buffalo_kids.jpg',
    `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi. `,
    'kids',
    2000);

let card3 = cardMaker('card3',
    'Damaged',
    'img/damaged.jpg',
    `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi. `,
    'adventure',
    2000);

let card4 = cardMaker('card4',
    'Kill',
    'img/kill.jpg',
    `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi. `,
    'action',
    2000);

let card5 = cardMaker('card5',
    'Megalopolis',
    'img/megalopolis.jpg',
    `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi. `,
    'adventure',
    2000);

let card6 = cardMaker('card6',
    'Mufasa',
    'img/mufasa.jpg',
    `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi. `,
    'kids',
    2000);

let card7 = cardMaker('card7',
    'Nosferatu',
    'img/nosferatum.jpg',
    `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi. `,
    'adventure',
    2000);

let card8 = cardMaker('card8',
    'Public disorder',
    'img/pub_disorder.jpg',
    `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi. `,
    'action',
    2000);

let card9 = cardMaker('card9',
    'Sonic 3',
    'img/sonic3.jpg',
    `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi. `,
    'kids',
    2000);