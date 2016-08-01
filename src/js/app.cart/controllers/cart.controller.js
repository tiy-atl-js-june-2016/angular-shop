function CartController (CartService) {

  let vm = this;

  init ();

  function init () {
    vm.products = CartService.getProducts();
  }

}

CartController.$inject = ['CartService'];
export { CartController };