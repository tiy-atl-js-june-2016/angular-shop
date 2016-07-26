function AddController (ProductService) {

  let vm = this;
  vm.addProduct = addProduct;


  function addProduct (product) {
    ProductService.createProduct(product).then( res => {
      console.log(res);
    });
  }

}

AddController.$inject = ['ProductService'];
export { AddController };