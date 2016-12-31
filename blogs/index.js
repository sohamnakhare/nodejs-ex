(function (blogs) {
    var WPAPI = require('wpapi');
    var wp = new WPAPI({ endpoint: 'http://localhost:7080/wordpress/wp-json' });

    blogs.getPosts = function (next) {
        wp.posts().then(function (posts) {
            next(posts);
        }).catch(function (err) {
            console.log('error', err);
        });
    };

    blogs.getPost = function (blogId, next) {
        wp.posts().id(blogId).then(function (post) {
            next(post);
        }).catch(function (err) {
            console.log('error', err);
        });
    };

})(module.exports);