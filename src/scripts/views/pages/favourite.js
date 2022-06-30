import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
 
const Favourite = {
  async render() {
    return `
      <h1> Favourite Restaurants </h1>
    `;
  },
 
  async afterRender() {
    const restaurant = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
 
export default Favourite;