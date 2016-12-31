(function (blogsController) {
    var blogs = require('../blogs');

    blogsController.init = function (app) {
        app.get('/blog', function (req, res) {
            blogs.getPosts(function (posts) {
                res.render('pages/blog.html', { blogs: posts });
            });
        });

        app.get('/blog/:id', function (req, res) {
            var blogId = req.params.id;
            blogs.getPost(blogId, function (post) {
                res.render('pages/blog-details.html', {blog: post});
            });
        });
    };

})(module.exports);