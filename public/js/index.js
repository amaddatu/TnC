var connection = require("./public/js/product");
var express = require('express');
var Product = require('../orm');
var Cart = ('../models/cart')

// GET Orders Page
app.get('/order', function(req, res, next) {
    Product.find(function(err, docs) { 
        var productChunks = [];
        var chunkSize = 3;
        for(i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('/views/shopping-cart', {title: 'Shopping Cart', products: productChunks});
    });
});

app.get('/add-to-cart:id', function(req, res) {
    // push products to cart object in session
    // retireve id
    var productId = req.params.id;
    // create new cart when new items are added OR pass oldCart if property exists
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    
    Product.findById(productId, function(err, product) {
        if (err) {
            return res.redirect('/views/shopping-cart.hbs');
        }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/views/shopping-cart')
    });
});

app.get('/shopping-cart', function(req, res) {
    if (!req.session.cart) {
        return res.render('data/cart', {products: null});
    }
    var cart = new Cart(req.session.cart);
    res.render('data/cart', {products: cart.generateArray(), totalPrice: cart.totalPrice})
});

  module.exports = router;

