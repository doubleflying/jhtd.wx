module.exports = app => {
    class ProductController extends app.Controller {
        * detail() {
            const ctx = this.ctx;
            yield ctx.render('product/detail.tpl');
        }
    }
    return ProductController;
};