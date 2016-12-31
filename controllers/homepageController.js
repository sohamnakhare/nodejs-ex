(function (homepageController) {

    homepageController.init = function (app) {
        app.get('/', function (req, res) {
            res.render('pages/index.html');
        });
    };

})(module.exports);