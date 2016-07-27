function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html',
      controller: 'LayoutController as vm'
    })

    // States pertaining to the store
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.addProduct', {
      url: '/add-product',
      templateUrl: 'templates/add-product.tpl.html',
      controller: 'AddController as vm'
    })

    // States pertaining to users
    .state('root.register', {
      url: '/register',
      templateUrl: 'templates/register.tpl.html',
      controller: 'RegisterController as vm'
    })
    .state('root.login', {
      url: '/login',
      templateUrl: 'templates/login.tpl.html',
      controller: 'LoginController as vm'
    })

  $urlRouterProvider.otherwise('/');

}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };