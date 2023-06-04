import LoveButtonInitiator from '../src/scripts/utils/love-button-initiator';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Unloving A Restaurant', () => {
  const addLoveButtonContainer = () => {
    document.body.innerHTML = '<div id="loveButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLoveButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should display unlove widget when the restaurant has been loved', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlove this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display love widget when the restaurant has been loved', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="love this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove loved restaurant from the list', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlove this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error when deleting restaurant if the unloved restaurant is not in the list', async () => {
    await TestFactories.createLoveButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlove this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
