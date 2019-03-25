var Product = require('./config/orm.js');

var product = [
    new Product({
        imagePath: "https://www.shutterstock.com/image-photo/cupcake-oreo-94814503",
        title: "Oreo Cupcake",
        description: "So Tasty",
        price: 3
    }),
    new Product({
        imagePath: "https://image.shutterstock.com/image-photo/cupcake-strawberry-syrup-fresh-strawberries-450w-1123277198.jpg",
        title: "Strawberry",
        description: "So Tasty",
        price: 3
    }),
    new Product({
        imagePath: "https://image.shutterstock.com/image-photo/delicious-vanilla-bean-cupcake-black-450w-131542382.jpg",
        title: "Vanilla",
        description: "So Tasty",
        price: 3
    }),
    new Product({
        imagePath: "https://image.shutterstock.com/image-photo/tasty-chocolate-cupcake-on-white-450w-1189409857.jpg",
        title: "Chocolate",
        description: "So Tasty",
        price: 3
    }),
    new Product({
        imagePath: "https://image.shutterstock.com/image-photo/cupcakes-white-chocolate-cream-nutella-450w-166163681.jpg",
        title: "Nutella",
        description: "So Tasty",
        price: 3
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, results) {
        done++;
        if (done === products.length) {
            return
        }
    });
}