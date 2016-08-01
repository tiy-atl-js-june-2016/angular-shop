import angular from 'angular';

import './app.cart';
import './app.core';
import './app.products';
import './app.users';

angular.module('app', ['app.cart', 'app.core', 'app.products', 'app.users']);