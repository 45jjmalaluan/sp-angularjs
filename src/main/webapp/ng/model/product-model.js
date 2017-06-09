product.factory('Product', function() {
    function Product() {
        this.id;
        this.description;
        this.price;
    };

    Product.prototype.fromJson = function(json) {
        var self = this;
        this.id = json.id;
        this.description = json.description;
        this.price = json.price;
    };

    Product.prototype.fromData = function(data) {
        var self = this;
        this.id = data.id;
        this.description = data.description;
        this.price = data.price;
    };

    return Product;
});