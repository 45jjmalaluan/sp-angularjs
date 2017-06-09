cart.controller('cartItemController', ['$scope', '$routeParams', 'productService', 'cartService', 'Product', function($scope, $routeParams, productService, cartService, Product) {
    console.log("@cartItemController");

    var pProduct = productService.getProduct($routeParams.id);
    var rProduct = pProduct.then(function(data) {
        var product = new Product();
        product.fromData(data);
        console.debug("@con promise");
        console.log(product);
        return product;
    });
    console.debug("@con");
    console.log(rProduct);

    cartService.createCart();
}]);

cart.controller('cartController', ['$scope', '$routeParams', 'productService', 'cartService', function($scope, $routeParams, productService, cartService) {
    console.log("@cartController");
}]);