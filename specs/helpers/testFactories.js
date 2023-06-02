import LoveButtonInitiator from '../../src/scripts/utils/love-button-initiator';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb';

const createLoveButtonPresenterWithRestaurant = async (restaurant) => {
  await LoveButtonInitiator.init({
    loveButtonContainer: document.querySelector('#loveButtonContainer'),
    favoriteRestaurants: FavoriteRestaurantIdb,
    restaurant,
  });
};

export { createLoveButtonPresenterWithRestaurant };
