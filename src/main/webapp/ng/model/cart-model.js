cart.factory('Item', function() {
    function Item(product, quantity, price) {
        this.product = product;
        this.quantity = quantity;
        this.price = price;
    }

    Item.prototype.fromJson = function(json) {
        this.product = json.product;
        this.quantity = json.quantity;
        this.price = json.price;
    }

    return Item;
});

cart.factory('Cart', function() {
    function Cart() {
        this.items = [];
    }

    Cart.prototype.addItem = function(item) {
        items.push(item);
    }

    Cart.prototype.fromJson = function(json) {
        this.id = json.id;
        this.items = json.items;
    }

    return Cart;
});