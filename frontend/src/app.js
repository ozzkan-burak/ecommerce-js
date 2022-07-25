import HomeScreen from './screens/HomeScreen.js';

const router = () => {
  console.log('ASD');
  const main = document.getElementById("main-container");
  main.innerHTML = HomeScreen.render();
};

window.addEventListener('load', router);