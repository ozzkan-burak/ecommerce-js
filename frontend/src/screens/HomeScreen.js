import data from "../data.js";

const HomeScreen = {
  render: () => {
    const { products } = data;

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
