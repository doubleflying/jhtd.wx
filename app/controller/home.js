module.exports = app => {
    class HomeController extends app.Controller {
        * index() {
            const ctx = this.ctx;
            yield ctx.render('home/index.tpl');
        }
    }
    return HomeController;
};