const fs = require('fs');
const Product = require('../../model/product');

class ProductsDB {
    constructor(){
        this.products = [];
    }

    find(id){
        return this?.products.find(product => product.id == id);
    }

}

const readData = fs.readFileSync('./data/products/products.json', 'utf8');

const jsonData = JSON.parse(readData);

let productsDB = new ProductsDB();

function shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

productsDB.products = shuffleArray(jsonData.products
.map(productData => {
    let product = new Product();

    product = {...productData};

    return product;
}));



module.exports = productsDB;