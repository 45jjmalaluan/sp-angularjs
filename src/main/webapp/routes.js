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

        .when('/cart/product/:id', {
            templateUrl: 'pages/cart.html',
            controller: 'cartItemController'
        })

        .when('/cart', {
            templateUrl: 'pages/cart.html',
            controller: 'cartItemController'
        })
});