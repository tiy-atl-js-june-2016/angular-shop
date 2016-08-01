import angular from 'angular';

import { AddController } from './controllers/add.controller';
import { ListController } from './controllers/list.controller';

import { ProductService } from './services/product.service';

angular
  .module('app.products', [])
  .controller('AddController', AddController)
  .controller('ListController', ListController)
  .service('ProductService', ProductService);