import CONFIG from '../../globals/config';
 
const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurants__title">${restaurant.name}</h2>
  <img class="restaurants__poster" src="${
    CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurants__info">
  <h3>Information</h3>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
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
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};