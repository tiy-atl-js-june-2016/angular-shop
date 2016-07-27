function ListController (ProductService) {

  let vm = this;

  init ();

  function init () {
    ProductService.getProducts().then( res => {
      vm.products = res.data;
    });
  }

}

ListController.$inject = ['ProductService'];
export { ListController };