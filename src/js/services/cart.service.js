function CartService ($cookies) {

  this.pushProducts = pushProducts;
  this.getProducts  = getProducts;


  function pushProducts (product) {
    let products = $cookies.getObject('products');
    if (products) {
      products.push(product);
    } else {
      products = [product];
    }
    $cookies.putObject('products', products);
  }

  function getProducts () {
    return $cookies.getObject('products');
  }

}

CartService.$inject = ['$cookies'];
export { CartService };