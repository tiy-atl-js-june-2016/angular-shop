function LayoutController (UserService, $rootScope) {

  let vm = this;
  vm.logOut = logOut;
  vm.loggedIn = false;

  $rootScope.$on('loginChange', (event, status) => {
    vm.loggedIn = status;
  });

  function logOut () {
    UserService.logOut();
    vm.loggedIn = false;
  }

}

LayoutController.$inject = ['UserService', '$rootScope'];
export { LayoutController };