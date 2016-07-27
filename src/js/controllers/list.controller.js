function ListController (ProductService, $scope) {

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
  }

}

ListController.$inject = ['ProductService', '$scope'];
export { ListController };