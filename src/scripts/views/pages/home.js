import RestaurantSource from "../../data/restaurant-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";
 
const Home = {
    async render() {
        return `
	
      <div class="content">
        <h2 class="content__heading">All Restaurants</h2>
        <div id="restaurants" class="restaurants" tabindex="0">
 
        </div>
      </div>
    `;
    },
 
    async afterRender() {
        const restaurants = await RestaurantSource.listRestaurant();
        const restaurantContainer = document.querySelector("#restaurants");
        restaurants.forEach((resto) => {
            restaurantContainer.innerHTML += createRestaurantItemTemplate(resto);
        });
    },
};
 
export default Home;