import * as fs from 'fs';
import {
    randCatchPhrase,
    randPhrase,
    randDomainName,
    randProductCategory,
    randJSON,
    randCompanyName,
    randAddress,
    randSocial,
    randPhoneNumber,
    randParagraph,
    randPastDate,
    randStatus,
    randAwsService
} from '@ngneat/falso';

let products = [];
let prices = [];

for (let i = 0; i < 1000; i++) {
    let randomJunk = randJSON({length: Math.round(Math.random() * 3), max: 3});
    let phrases = randPhrase({length: 1})
        .concat(randParagraph({length: 1}))
    let product = {
        "id": i,
        "title": randCatchPhrase(),
        "teaser": phrases[0],
        "description": phrases.join('. '),
        "url": randDomainName(),
        "category": randProductCategory(),
        "icon": `https://picsum.photos/id/${i}/200/200`,
        "image": `https://picsum.photos/id/${i}/400/300`,
        "providedBy": {
            "companyName": randCompanyName(),
            "address": randAddress(),
            "social": randSocial(),
            "phone": randPhoneNumber()
        },
        "releaseDate": randPastDate(),
        "status": randStatus(),
        "service": randAwsService(),
        "callToActions": getRandCtas(),
        ...randomJunk
    };
    let price = {
        "id": i,
        "price": Math.round(Math.random() * 1000),
        "currency": "EUR"
    };

    products.push(product);
    prices.push(price);
}

function getRandCtas() {
    const ctas = ['prepaid', 'postpaid', 'monthly', 'trial', 'free'];
    const shuffled = ctas.sort(() => 0.5 - Math.random());
    return (shuffled.slice(0, getRandomInt(4)));
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// expected output: 0, 1 or 2

let productsData = JSON.stringify(products);
let priceData = JSON.stringify(prices);

fs.writeFileSync('../products.json', productsData);
fs.writeFileSync('../prices.json', priceData);
