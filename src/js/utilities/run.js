function run ($rootScope, UserService, $state) {

  $rootScope.$on('$stateChangeStart', (event, toState) => {
    if (!UserService.isLoggedIn() && toState.name !== 'root.login' && toState.name !== 'root.register'){
      event.preventDefault();
      $state.go('root.login');
    }
  });

  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    // UserService.validatePage(toState);
    $rootScope.$broadcast('loginChange', UserService.isLoggedIn());
  });

}

run.$inject = ['$rootScope', 'UserService', '$state'];
export { run };