(function(controllers){
    var homepageController = require('./homepageController.js');
    var solutionsController = require('./solutionsController.js');
    var blogsController = require('./blogsController.js');
    
    controllers.init = function(app){
        homepageController.init(app);
        solutionsController.init(app);
        blogsController.init(app);
    };

})(module.exports);