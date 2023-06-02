const assert = require('assert');

Feature('Loving Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty loved restaurants',  ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('loving one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');  
  I.wait(3);

  
  I.waitForElement('.restaurant-item');
  I.seeElement('#restaurant-link');

  const firstRestaurant = locate('#restaurant-link').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  
  I.waitForElement('.love-section');
  I.seeElement('#loveButton');
  I.click('#loveButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const lovedRestaurantTitle = await I.grabTextFrom('#restaurant-link');

  assert.strictEqual(firstRestaurantTitle, lovedRestaurantTitle);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.wait(3);

  I.waitForElement('.restaurant-item');
  I.seeElement('#restaurant-link');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('#restaurant-link').at(i));
    I.waitForElement('.love-section');
    I.seeElement('#loveButton');
    I.click('#loveButton');
    titles.push(await I.grabTextFrom('.restaurant-title'));
    I.amOnPage('/');
    I.wait(3);
  }

  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('#query');

  const searchQuery = titles[1].substring(1, 3);
  const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (title, index) => {
    const visibleTitle = await I.grabTextFrom(locate('#restaurant-link').at(index + 1));
    assert.strictEqual(title, visibleTitle);
  });
});
