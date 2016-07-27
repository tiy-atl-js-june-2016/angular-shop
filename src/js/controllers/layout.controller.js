function LayoutController (UserService, $rootScope) {

  let vm = this;
  vm.logOut = logOut;
  vm.loggedIn = false;
  vm.cartCount = 0;
  vm.cartTotal = 0;

  $rootScope.$on('loginChange', (event, status) => {
    vm.loggedIn = status;
  });

  $rootScope.$on('cartChange', (event, product) => {
    vm.cartCount ++;
    vm.cartTotal += Number(product.data.price);
  });

  function logOut () {
    UserService.logOut();
    vm.loggedIn = false;
  }

}

LayoutController.$inject = ['UserService', '$rootScope'];
export { LayoutController };