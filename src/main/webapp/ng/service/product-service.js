product.service('productService', ['$resource', function($resource) {
    this.url = "http://localhost:8080/ess/v1/products";
}]);
