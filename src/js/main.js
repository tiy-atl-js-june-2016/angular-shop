import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

// Import some utilities
import { config } from './utilities/config';
import { serverConstant } from './utilities/server.constant';

// Import some controllers
import { RegisterController } from './controllers/register.controller';
import { LoginController } from './controllers/login.controller';

// Import some services
import { UserService } from './services/user.service';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(config)
  .constant('SERVER', serverConstant)
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .service('UserService', UserService);

