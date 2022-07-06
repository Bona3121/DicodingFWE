import FavouriteRestaurantIdb from "../../data/favourite-restaurant-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";
 
const Favourite = {
    async render() {
        return `
      <h1> Favourite Restaurants </h1>
	  <div id="restaurants" class="restaurants" tabindex="0">
 
        </div>
    `;
    },
 
    async afterRender() {
        const restaurants = await FavouriteRestaurantIdb.getAllRestaurants();
        const restaurantContainer = document.querySelector("#restaurants");
        restaurants.forEach((resto) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
        });
    },
};
 
export default Favourite;