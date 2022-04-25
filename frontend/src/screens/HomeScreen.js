import axios from 'axios';

const HomeScreen = {
  render: async () => {
    const response = await axios({
      url:'http://localhost:5100/api/products',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if(!response || !response.statusText !== 'OK' || !response.data) {
      return '<p>Something went wrong</p>';
    };

    const produxt = response.data;

    return `
      <ul class="products">
        ${products.map((product) => {
            return `
            <li>
              <div class="product">
                <a href="/#/product/${product._id}">
                  <img src="${product.image}" alt="${product.name}">
                  <div class="product-name">${product.name}</div>
                  <div class="product-brand">${product.brand}</div>
                  <div class="product-price">${product.price}</div>
                  <div class="product-rating">${product.rating}</div>
                </a>
              </div>
            </li>
          `;
          })
          .join("\n")}
      </ul>
    `;
  },
};

export default HomeScreen;
