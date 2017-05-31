spApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/products', {
            templateUrl: 'pages/products.html',
            controller: 'productsController'
        })
});