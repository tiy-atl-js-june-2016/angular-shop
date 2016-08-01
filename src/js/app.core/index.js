import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import { LayoutController } from './controllers/layout.controller';

import { config } from './utilities/config';
import { run } from './utilities/run';
import { serverConstant } from './utilities/server.constant';

angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(config)
  .run(run)
  .constant('SERVER', serverConstant)
  .controller('LayoutController', LayoutController);