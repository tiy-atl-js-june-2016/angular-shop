import angular from 'angular';
import 'angular-ui-router';

// Import some utilities
import { config } from './utilities/config';
import { serverConstant } from './utilities/server.constant';

// Import some controllers
import { RegisterController } from './controllers/register.controller';

// Import some services
import { UserService } from './services/user.service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverConstant)
  .controller('RegisterController', RegisterController)
  .service('UserService', UserService);

