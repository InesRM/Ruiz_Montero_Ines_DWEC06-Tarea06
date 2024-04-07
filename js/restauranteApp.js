import Restaurant from './restaurante.js';
import RestaurantController from './restauranteController.js';
import RestaurantView from './restauranteView.js';

const RestaurantApp = new RestaurantController(Restaurant.getInstance(), new RestaurantView());

export default RestaurantApp;