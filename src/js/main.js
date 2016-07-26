import angular from 'angular';
import 'angular-ui-router';

// Import some utilities
import { config } from './utilities/config';
import { serverConstant } from './utilities/server.constant';

angular
  .module('app', ['ui.router'])
  .config(config)
  .constant('SERVER', serverConstant);
