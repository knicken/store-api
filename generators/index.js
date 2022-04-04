import * as fs from 'fs';
import {
    randCatchPhrase,
    randPhrase,
    randDomainName,
    randProductCategory,
    randJSON,
    randCurrencyCode,
    randCompanyName,
    randAddress,
    randSocial,
    randPhoneNumber,
    randParagraph,
    randQuote
} from '@ngneat/falso';

let products = [];
let prices = [];

for (let i = 0; i < 1000 + Math.round(Math.random() * 1000); i++) {
    let randomJunk = randJSON({length: Math.round(Math.random() * 3), max: 3});
    let phrases = randPhrase({length: 1})
        .concat(randQuote({length: 1}))
        .concat(randParagraph({length: 1}))
    let product = {
        "id": i,
        "title": randCatchPhrase(),
        "teaser": phrases[0],
        "description": phrases.join('. '),
        "url": randDomainName(),
        "category": randProductCategory(),
        "icon": "https://picsum.photos/200/200",
        "image": "https://picsum.photos/400/300",
        "providedBy": {
            "companyName": randCompanyName(),
            "address": randAddress(),
            "social": randSocial(),
            "phone": randPhoneNumber()
        },
        ...randomJunk
    };
    let price = {
        "id": i,
        "price": Math.round(Math.random() * 1000),
        "currency": randCurrencyCode()
    };

    products.push(product);
    prices.push(price);
}


let productsData = JSON.stringify(products);
let priceData = JSON.stringify(prices);

fs.writeFileSync('../products.json', productsData);
fs.writeFileSync('../prices.json', priceData);
