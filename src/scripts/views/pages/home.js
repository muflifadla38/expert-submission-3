import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
import '../components/hero-component';

const Home = {
  async render() {
    return `
      <hero-component></hero-component>   
      <section class="content-section">      
        <p class="content-title font-bold" tabindex="0">Daftar Menu</p>
        <div id="restaurant" class="restaurant-list"></div>
      </section>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurant');
    const restaurants = await RestaurantSource.listRestaurant();

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
