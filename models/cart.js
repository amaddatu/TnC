module.exports = function Cart(oldCart){
    // recreate/update cart; assign items/qty/price values
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;

    // add item validation
    this.add = function(item, id) {
        // add item & check if id exists
        var storedItem = this.items[id];
        // if not a stored item, create anew
        if (!storedItem) {
            // create new storedItem & key[id]
            storedItem = this.itmes[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.price * storedItem.qty;
        this.totalQty++;  
        this.totalPrice += storedItem.item.price;
    };

    // give cart items as an array
    this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};