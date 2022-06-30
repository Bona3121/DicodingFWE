import CONFIG from '../../globals/config';
 
const createRestaurantDetailTemplate = (restaurants) => `
  <h2 class="restaurants__title">${restaurants.name}</h2>
  <img class="restaurants__poster" src="${
    CONFIG.BASE_IMAGE_URL + restaurants.pictureId
  }" alt="${restaurants.name}" />
  <div class="restaurants__info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>Food Menu</h4>
    <p>${restaurant.menus.foods.map((foods) => foods.name).join(" | ")}</p>
   <h4>Drink Menu</h4>
    <p>${restaurant.menus.drinks.map((drinks) => drinks.name).join(" | ")}</p>
  </div>
  <div class="restaurants__overview">
    <h3>Customer Reviews</h3>
    <p>${restaurant.customerReviews.map(name.join(" | "))}</p>
  <p>${restaurant.customerReviews.map(review.join(" | "))}</p>
  <p>${restaurant.customerReviews.map(date.join(" | "))}</p>
  </div>
`;
 
const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurants-item">
    <div class="restaurants-item__header">
      <img class="restaurants-item__header__poster" alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      
    </div>
    <div class="restaurants-item__content">
     <h3 class="restaurants__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;
 
const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
 
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};