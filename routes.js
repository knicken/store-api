const products = require('./products.json');
const prices = require('./prices.json')

module.exports.setup = (app) => {

    app.get('/', (req, res) => {
        res.redirect('/api-docs');
    });

    app.get('/products', (req, res) => {
        const teaserProducts = products.map(product => {
            return {id: product.id, title: product.title, teaser: product.teaser, icon: product.icon}
        })
        res.send(teaserProducts)
    })

    app.get('/products/:id', (req, res) => {
        const product = products.find(product => product.id == req.params.id)
        if (product) {
            res.send(product);
        } else {
            res.sendStatus('404');
        }
    })

    app.get('/products/search/:query', (req, res) => {
        const filteredProducts = products.filter(product => product.description.toLowerCase().includes(req.params.query.toLowerCase()));
        res.send({
            "count": filteredProducts.length,
            "results": filteredProducts
        });
    })

    app.get('/price/:id', (req, res) => {
        const price = prices.find(price => price.id == req.params.id);
        if (price) {
            res.send(price);
        } else {
            res.sendStatus('404');
        }
    })

    //TODO
    app.post('/add-to-cart', (req, res) => {
        res.sendStatus('501');
    })

    app.get('/cart/:id', (req, res) => {
        res.sendStatus('501');
    })

    app.post('/login', (req, res) => {
        res.sendStatus('501');
    })

    app.get('/user', (req, res) => {
        res.sendStatus('501');
    })
};
