function AddController (ProductService, $state) {

  let vm = this;
  vm.addProduct = addProduct;


  function addProduct (product) {
    ProductService.createProduct(product).then( res => {
      $state.go('root.home');
    });
  }

}

AddController.$inject = ['ProductService', '$state'];
export { AddController };