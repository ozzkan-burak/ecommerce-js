//import data "../data.js";
//const data = require("../data.js");
//import data from '../../../backend/data.js';

const HomeScreen =  {
  render: async () => {
    //const { products } = data;
    const response = await fetch("http://localhost:5000/api/products", {
      headers: {
        "Content-Type":"application/json",
      }
    });

    if(!response || !response.ok){
      return `<div>Error in getting data</div>`
    }

    const products = await response.json();
    console.log(products);
    
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
          )
          .join("")}
      </ul>
    `;
  }
};

export default HomeScreen;
