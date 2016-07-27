import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

// Import some utilities
import { config } from './utilities/config';
import { serverConstant } from './utilities/server.constant';
import { run } from './utilities/run';

// Import some controllers
import { RegisterController } from './controllers/register.controller';
import { LoginController } from './controllers/login.controller';
import { AddController } from './controllers/add.controller';
import { LayoutController } from './controllers/layout.controller';
import { ListController } from './controllers/list.controller';
import { CartController } from './controllers/cart.controller';

// Import some services
import { UserService } from './services/user.service';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(config)
  .run(run)
  .constant('SERVER', serverConstant)
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .controller('AddController', AddController)
  .controller('LayoutController', LayoutController)
  .controller('ListController', ListController)
  .controller('CartController', CartController)
  .service('UserService', UserService)
  .service('ProductService', ProductService)
  .service('CartService', CartService);

