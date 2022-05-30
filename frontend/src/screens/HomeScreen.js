import axios from "axios";

//import Rating from "../components/Rating";
//import { hideLoading, showLoading } from "../utils";

const HomeScreen = {
  render: async () => {
    //showLoading();
    const res = await axios({
      url: "http://localhost:5001/api/products",
      headers: {
        'Content-Type' : 'application/json',
      },
    });
    //hideLoading();
    if(!res || res.statusText !== 'OK') {
      return `<div>Data alınırken hata oluştu</div>`;
    };

    const products = res.data;

    return `
      <ul class="product-list">
        ${products.map(product => `
          <li>
            TEST
          </li>
        `).join('\n')}
      </ul>
    `
  }
}
export default HomeScreen;