//import data "../data.js";
//const data = require("../data.js");
//import data from '../../../backend/data.js';
import axios from 'axios';
import Rating from '../components/Rating';
import {config} from '../config'

const {DEV_BASE_URL} = config;

const HomeScreen =  {
  render: async () => {
    //const { products } = data;
    const response = await axios({
      url:`${DEV_BASE_URL}api/products`,
      headers: {
        "Content-Type":"application/json",
      }
    });
    debugger;
    if(!response || response.statusText !== 'OK'){
      return `<div>Error in getting data</div>`
    }

    const products = await response.data;
    
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
                <div class="product-rating">
                  ${Rating.render({
                    value: product.rating,
                    text: `${product.numReviews} reviews`
                  })}
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


