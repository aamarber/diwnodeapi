const app = require('../app');

const productsDB = require("../data/products/productsdb");

const auth = require('../middleware/auth');

app.post('/products', auth, (request, result) => {
    result.status(200).json(productsDB.products);
});

app.post('/products/:id?', auth, (request, result) => {
    const productId = request.params.id;

    if(!productId){
        result.status(404).send('Product not found');
    }

    const product = productsDB.find(productId);

    result.status(200).json(product);
});