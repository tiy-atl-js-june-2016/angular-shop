function ProductService (SERVER, $http, UserService) {

  let user = UserService.getUser();
  let url = SERVER.URL + user + '/' + SERVER.SHOP_NAME;
  this.createProduct = createProduct;


  function createProduct (product) {
    return $http.post(url, product, UserService.headers());
  }

}

ProductService.$inject = ['SERVER', '$http', 'UserService'];
export { ProductService };