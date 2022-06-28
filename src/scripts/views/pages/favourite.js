import RestaurantsSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';
 
const Favourite = {
  async render() {
    return `
      <h1> Favourite Restaurants </h1>
    `;
  },
 
  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};
 
export default Favourite;