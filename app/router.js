'use strict';

module.exports = app => {
    app.redirect('/', '/home');
    app.get('/home', app.controller.home.index);
    app.get('/product/detail', app.controller.product.detail);
};