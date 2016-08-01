function ListController (ProductService, $scope, CartService, UserService) {

  let vm = this;
  vm.addToCart = addToCart;

  init ();

  function init () {
    ProductService.getProducts().then( res => {
      vm.products = res.data;
    });
  }

  function addToCart (product) {
    $scope.$emit('cartChange', product);
    CartService.pushProducts(product);
  }

}

ListController.$inject = ['ProductService', '$scope', 'CartService', 'UserService'];
export { ListController };