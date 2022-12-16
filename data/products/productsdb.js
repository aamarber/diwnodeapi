const fs = require('fs');
const Product = require('../../model/product');

class ProductsDB {
    constructor(){
        this.products = [];
    }

    find(id){
        return this?.products.find(product => product.id === id);
    }

}

const readData = fs.readFileSync('./data/products/products.json', 'utf8');

const jsonData = JSON.parse(readData);

let productsDB = new ProductsDB();

productsDB.products = jsonData.products.map(productData => {
    let product = new Product();

    product.id = productData.id;
    product.name = productData.name;
    product.description = productData.description;
    product.price = productData.price;
    product.image = productData.image;

    return product;
});

module.exports = productsDB;