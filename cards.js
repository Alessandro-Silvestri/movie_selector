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

let moviesObj = [
    {
        idCard : "card1",
        title : "Back in Action",
        imgSrc : "img/back_action.jpg",
        text : `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi.`,
        genre : "action",
        year : 2000
    },

    {
        idCard : "card2",
        title : "Buffalo kids",
        imgSrc : "img/buffalo_kids.jpg",
        text : `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi.`,
        genre : "kids",
        year : 2000
    },

    {
        idCard : "card3",
        title : "Damaged",
        imgSrc : "img/damaged.jpg",
        text : `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi.`,
        genre : "adventure",
        year : 2000
    },

    {
        idCard : "card4",
        title : "Kill",
        imgSrc : "img/kill.jpg",
        text : `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi.`,
        genre : "action",
        year : 2000
    },

    {
        idCard : "card5",
        title : "Megalopolis",
        imgSrc : "img/megalopolis.jpg",
        text : `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi.`,
        genre : "adventure",
        year : 2000
    },

    {
        idCard : "card6",
        title : "Mufasa",
        imgSrc : "img/mufasa.jpg",
        text : `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi.`,
        genre : "kids",
        year : 2000
    },

    {
        idCard : "card7",
        title : "Nosferatu",
        imgSrc : "img/nosferatum.jpg",
        text : `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi.`,
        genre : "adventure",
        year : 2000
    },

    {
        idCard : "card8",
        title : "DamPublic disorderaged",
        imgSrc : "img/pub_disorder.jpg",
        text : `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi.`,
        genre : "action",
        year : 2000
    },

    {
        idCard : "card9",
        title : "Sonic 3",
        imgSrc : "img/sonic3.jpg",
        text : `Una catastrofe scuote il pianeta: i poli magnetici della Terra
            si sono invertiti e in questo mondo devastato una famiglia deve
            lottare per la sopravvivenza. Quando i poli si invertiranno di nuovo,
            sarà forse troppo tardi.`,
        genre : "kids",
        year : 2000
    },
]

for (let movie of moviesObj) {
    cardMaker(movie.idCard, movie.title, movie.imgSrc, movie.text, movie.genre, movie.year);
}
