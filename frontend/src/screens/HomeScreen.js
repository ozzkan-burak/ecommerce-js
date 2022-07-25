//import data "../data.js";
//const data = require("../data.js");
import data from '../data.js';

const HomeScreen =  {
  render: () => {
    console.log('TEST');
    const { products } = data;
    return `
      <ul class="products">
        ${products.map(
          (product) => `
             <li>
              <div class="product">
                <a href="/#/product/1">
                  <img src="${product.image}" alt="${product.name}" />
                </a>
                <div class="product-name">
                  <a href="/#/product/${product._id}">
                    ${product.name}
                  </a>
                </div>
                <div class="product-brand">
                  ${product.brand}
                </div>
                <div class="product-price">
                  ${product.price} TL
                </div>
              </div>
            </li>
          `
        ).join('')}
      </ul>
    `;
  }
};

export default HomeScreen;