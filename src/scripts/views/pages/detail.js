import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LoveButtonInitiator from '../../utils/love-button-initiator';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import '../components/hero-component';

const Detail = {
  async render() {
    return `   
      <hero-component></hero-component>   
      <section class="content-section">      
        <p class="content-title font-bold" tabindex="0">Detail Restoran</p>
        <div id="restaurant" class="restaurants-detail restaurant-list flex items-center"></div>
      </section>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LoveButtonInitiator.init({
      loveButtonContainer: document.querySelector('#loveButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
