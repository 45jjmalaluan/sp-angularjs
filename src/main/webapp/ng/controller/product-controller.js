product.controller('productsController', ['$scope', 'productService', function($scope, productService) {
    console.log("@productsController");

    var products = productService.getProducts();

    products.then(function(data) {
        $scope.productDtos = data;
    });
}]);