product.factory('Product', function() {
    function Product(id, description, price) {
        this.id = id;
        this.description = description;
        this.price = price;
    };

    Product.prototype.fromJson = function(json) {
        var self = this;
        this.id = json.id;
        this.description = json.description;
        this.price = json.price;
    }

    return Product;
});