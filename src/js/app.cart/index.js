import angular from 'angular';

import { CartController } from './controllers/cart.controller';

import { CartService } from './services/cart.service';

angular
  .module('app.cart', [])
  .controller('CartController', CartController)
  .service('CartService', CartService);