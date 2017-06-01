product.service('productService', ['$resource', '$q', 'Product', function($resource, $q, Product) {
    console.log("@productService");
    this.q = $q;
    var url = "http://localhost:8080/ess/v1/products/:id";

    this.getProducts = function() {
        var products = [];
        var deferred = this.q.defer();

        $resource(url).query().$promise.then(function(json) {
            angular.forEach(json, function(json) {
                var product = new Product();
                product.fromJson(json);
                console.log(product);
                products.push(product);
            });
            deferred.resolve(products);
        });

        return deferred.promise;
    };
}]);
