(function (solutionsController) {

    solutionsController.init = function (app) {
        app.get('/solutions', function (req, res) {
            res.render('pages/solutions.html');
        })
    };

})(module.exports);