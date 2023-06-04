import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <article class="restaurant-detail card transition">
    <div class="label" tabindex="0">${restaurant.city}</div>
    <div class="card-image" tabindex="0">
      <img class="image transition lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restaurant image">
    </div>
    <div class="love-section flex justify-between">
      <div class="categories">
          ${restaurant.categories.map((category) => `<div class="label category" tabindex="0">${category.name}</div>`).join('')}
      </div>      
      <div id="loveButtonContainer"></div>
    </div>
    
    <div class="card-body">
      <p class="restaurant-title content-title font-bold" tabindex="0">${restaurant.name}</p>
      <div class="rating flex items-center">
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.9121 1.59053C12.7508 1.2312 12.3936 1 11.9997 1C11.6059 1 11.2487 1.2312 11.0874 1.59053L8.27041 7.86702L1.43062 8.60661C1.03903 8.64895 0.708778 8.91721 0.587066 9.2918C0.465355 9.66639 0.574861 10.0775 0.866772 10.342L5.96556 14.9606L4.55534 21.6942C4.4746 22.0797 4.62768 22.4767 4.94632 22.7082C5.26497 22.9397 5.68983 22.9626 6.03151 22.7667L11.9997 19.3447L17.968 22.7667C18.3097 22.9626 18.7345 22.9397 19.0532 22.7082C19.3718 22.4767 19.5249 22.0797 19.4441 21.6942L18.0339 14.9606L23.1327 10.342C23.4246 10.0775 23.5341 9.66639 23.4124 9.2918C23.2907 8.91721 22.9605 8.64895 22.5689 8.60661L15.7291 7.86702L12.9121 1.59053Z" fill="#146c94"></path> </g></svg>
        <p class="font-semibold" tabindex="0">${restaurant.rating}</p>
      </div>
      <div class="address flex items-center">
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3856 23.789L11.3831 23.7871L11.3769 23.7822L11.355 23.765C11.3362 23.7501 11.3091 23.7287 11.2742 23.7008C11.2046 23.6451 11.1039 23.5637 10.9767 23.4587C10.7224 23.2488 10.3615 22.944 9.92939 22.5599C9.06662 21.793 7.91329 20.7041 6.75671 19.419C5.60303 18.1371 4.42693 16.639 3.53467 15.0528C2.64762 13.4758 2 11.7393 2 10C2 7.34784 3.05357 4.8043 4.92893 2.92893C6.8043 1.05357 9.34784 0 12 0C14.6522 0 17.1957 1.05357 19.0711 2.92893C20.9464 4.8043 22 7.34784 22 10C22 11.7393 21.3524 13.4758 20.4653 15.0528C19.5731 16.639 18.397 18.1371 17.2433 19.419C16.0867 20.7041 14.9334 21.793 14.0706 22.5599C13.6385 22.944 13.2776 23.2488 13.0233 23.4587C12.8961 23.5637 12.7954 23.6451 12.7258 23.7008C12.6909 23.7287 12.6638 23.7501 12.645 23.765L12.6231 23.7822L12.6169 23.7871L12.615 23.7885C12.615 23.7885 12.6139 23.7894 12 23L12.6139 23.7894C12.2528 24.0702 11.7467 24.0699 11.3856 23.789ZM12 23L11.3856 23.789C11.3856 23.789 11.3861 23.7894 12 23ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" fill="#146c94"></path> </g></svg>
        <p class="font-semibold" tabindex="0">${restaurant.address}</p>
      </div>
      <div class="description" tabindex="0">${restaurant.description}</div>
    </div>
  </article>

  <article class="restaurant-detail restaurant-menu">
    <p class="content-title font-bold" tabindex="0">Menu</p>
    <div class="menu-section flex-wrap justify-center">
      <div class="card transition">
        <p class="menu-title font-semibold" tabindex="0">Makanan</p>
        <div class="card-body">
        ${restaurant.menus.foods.map((food) => `        
          <div class="menu-item flex items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
            <p tabindex="0">${food.name}</p>
          </div>`).join('')}
        </div>
      </div>

      <div class="card transition">
        <p class="menu-title font-semibold" tabindex="0">Minuman</p>
        <div class="card-body">
        ${restaurant.menus.drinks.map((drink) => `        
          <div class="menu-item flex items-center">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"></path></svg>
            <p tabindex="0">${drink.name}</p>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </article>

  <article class="restaurant-detail restaurant-review">
    <p class="content-title font-bold text-center" tabindex="0">Review</p>
    <div class="review-section flex flex-wrap justify-center">
      ${restaurant.customerReviews.map((customer) => `
      <div class="card transition">
        <div class="card-header flex">
          <div class="reviewer-name flex items-center">
            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="none"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8Z" fill="#146c94"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43094 16.9025C7.05587 16.2213 9.2233 16 12 16C14.771 16 16.9351 16.2204 18.5586 16.8981C20.3012 17.6255 21.3708 18.8613 21.941 20.6587C22.1528 21.3267 21.6518 22 20.9592 22H3.03459C2.34482 22 1.84679 21.3297 2.0569 20.6654C2.62537 18.8681 3.69119 17.6318 5.43094 16.9025Z" fill="#146c94"></path> </g></svg>
            <p class="review-title font-semibold text-center" tabindex="0">${customer.name}</p>
          </div>
          <div class="review-date flex items-center">
            <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 9C2 7.11438 2 6.17157 2.58579 5.58579C3.17157 5 4.11438 5 6 5H18C19.8856 5 20.8284 5 21.4142 5.58579C22 6.17157 22 7.11438 22 9C22 9.4714 22 9.70711 21.8536 9.85355C21.7071 10 21.4714 10 21 10H3C2.5286 10 2.29289 10 2.14645 9.85355C2 9.70711 2 9.4714 2 9Z" fill="#146c94"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H18C19.8856 22 20.8284 22 21.4142 21.4142C22 20.8284 22 19.8856 22 18V13C22 12.5286 22 12.2929 21.8536 12.1464C21.7071 12 21.4714 12 21 12H3C2.5286 12 2.29289 12 2.14645 12.1464C2 12.2929 2 12.5286 2 13V18ZM7 15C7 14.5286 7 14.2929 7.14645 14.1464C7.29289 14 7.5286 14 8 14H10C10.4714 14 10.7071 14 10.8536 14.1464C11 14.2929 11 14.5286 11 15C11 15.4714 11 15.7071 10.8536 15.8536C10.7071 16 10.4714 16 10 16H8C7.5286 16 7.29289 16 7.14645 15.8536C7 15.7071 7 15.4714 7 15ZM7.14645 18.1464C7 18.2929 7 18.5286 7 19C7 19.4714 7 19.7071 7.14645 19.8536C7.29289 20 7.5286 20 8 20H10C10.4714 20 10.7071 20 10.8536 19.8536C11 19.7071 11 19.4714 11 19C11 18.5286 11 18.2929 10.8536 18.1464C10.7071 18 10.4714 18 10 18H8C7.5286 18 7.29289 18 7.14645 18.1464ZM13 15C13 14.5286 13 14.2929 13.1464 14.1464C13.2929 14 13.5286 14 14 14H16C16.4714 14 16.7071 14 16.8536 14.1464C17 14.2929 17 14.5286 17 15C17 15.4714 17 15.7071 16.8536 15.8536C16.7071 16 16.4714 16 16 16H14C13.5286 16 13.2929 16 13.1464 15.8536C13 15.7071 13 15.4714 13 15ZM13.1464 18.1464C13 18.2929 13 18.5286 13 19C13 19.4714 13 19.7071 13.1464 19.8536C13.2929 20 13.5286 20 14 20H16C16.4714 20 16.7071 20 16.8536 19.8536C17 19.7071 17 19.4714 17 19C17 18.5286 17 18.2929 16.8536 18.1464C16.7071 18 16.4714 18 16 18H14C13.5286 18 13.2929 18 13.1464 18.1464Z" fill="#146c94"></path> <path d="M7 3L7 6" stroke="#146c94" stroke-width="2" stroke-linecap="round"></path> <path d="M17 3L17 6" stroke="#146c94" stroke-width="2" stroke-linecap="round"></path> </g></svg>
            <p class="font-semibold" tabindex="0">${customer.date}</p>   
          </div>     
        </div>
        <div class="card-body">
          <div class="menu-item flex items-center">
            <p tabindex="0">${customer.review}</p>
          </div>
        </div>
      </div>
      `).join('')}      
    </div>
  </article>
`;

const createRestaurantItemTemplate = (restaurant) => {
  let restaurantDescription = '';

  if (restaurant.description) {
    restaurantDescription = restaurant.description.substr(0, 90);
    restaurantDescription = restaurantDescription.substring(
      0,
      Math.min(restaurantDescription.length, restaurantDescription.lastIndexOf(' ')),
    );
  }

  return `
  <article class="restaurant-item card transition">
    <div class="label" tabindex="0">${restaurant.city || '-'}</div>
    <div class="card-image" tabindex="0">
      <img class="image transition lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId || '-'}" alt="Restaurant image">
    </div>
    <div class="card-body">
      <div class="rating flex items-center">
        <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12.9121 1.59053C12.7508 1.2312 12.3936 1 11.9997 1C11.6059 1 11.2487 1.2312 11.0874 1.59053L8.27041 7.86702L1.43062 8.60661C1.03903 8.64895 0.708778 8.91721 0.587066 9.2918C0.465355 9.66639 0.574861 10.0775 0.866772 10.342L5.96556 14.9606L4.55534 21.6942C4.4746 22.0797 4.62768 22.4767 4.94632 22.7082C5.26497 22.9397 5.68983 22.9626 6.03151 22.7667L11.9997 19.3447L17.968 22.7667C18.3097 22.9626 18.7345 22.9397 19.0532 22.7082C19.3718 22.4767 19.5249 22.0797 19.4441 21.6942L18.0339 14.9606L23.1327 10.342C23.4246 10.0775 23.5341 9.66639 23.4124 9.2918C23.2907 8.91721 22.9605 8.64895 22.5689 8.60661L15.7291 7.86702L12.9121 1.59053Z" fill="#146c94"></path> </g></svg>
        <p class="font-semibold" tabindex="0">${restaurant.rating || '-'}</p>
      </div>
      <p class="restaurant-title title font-bold" tabindex="0">${restaurant.name || '-'}</p>
      <div class="description" tabindex="0">${restaurantDescription || '-'}</div>
    </div>
    <div class="card-footer">
      <button class="more">
        <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
        </span>
        <a href="/#/detail/${restaurant.id}" id="restaurant-link" class="button-text" tabindex="0">Cek Detail</a>
      </button>
    </div>
  </article>`;
};

const createLoveButtonTemplate = () => `  
  <button id="loveButton" class="love-button transition" aria-label="love this restaurant" tabindex="0">
    <svg fill="none" viewBox="0 0 24 24" class="" xmlns="http://www.w3.org/2000/svg" stroke="#ff6e6e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
  </button>
`;

const createLovedButtonTemplate = () => `
  <button id="loveButton" class="love-button transition" aria-label="unlove this restaurant" tabindex="0">
    <svg fill="#ff6e6e" viewBox="0 0 24 24" class="" xmlns="http://www.w3.org/2000/svg" stroke="#ff6e6e"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.808,11.079C19.829,16.132,12,20.5,12,20.5s-7.829-4.368-8.808-9.421C2.227,6.1,5.066,3.5,8,3.5a4.444,4.444,0,0,1,4,2,4.444,4.444,0,0,1,4-2C18.934,3.5,21.773,6.1,20.808,11.079Z"></path></g></svg>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate,
  createLoveButtonTemplate, createLovedButtonTemplate,
};
