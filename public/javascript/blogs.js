$(document).ready(
    $(function () {
        

        var blogsElements = $('#blogs .blog').find('.more-link').remove();

        function addContinueReadingLink(element, blog) {
            var clickhandler = continueReadingClick.bind(this, blog);
            var continueReadingLink = blogHelper.getContinueReadingElement();
            continueReadingLink.click(function() {
                clickhandler();
            });
            element.append(continueReadingLink);
        }
    })
);

var blogHelper = (function(){
    return{
     getBlogHtml: _getBlogHtml,
     getContinueReadingElement: _getContinueReadingElement,
     generateBlogDetailsPage: _generateBlogDetailsPage
    };

    function _getBlogHtml(i, blog, blogs){
         var html = '';
            html += '<div class="col-xs-12 blog ' +
                (i != blogs.length - 1 ? 'bottom-border-grey-thick' : '') +
                '">'
            html += '<div class="form-group">';
            html += '<div style="font-size:16px">' + blog.date + '</div>';
            html += '<strong>' + blog.title.rendered + '</strong>';
            html += '</div>';
            html += '<div class="blog-content">';
            html += (blog.excerpt ? blog.excerpt.rendered : blog.content.rendered);
            html += '</div>';
            html += '</div>';

            return html;
    }

     function _getContinueReadingElement() {
        var continueReadingLinkHtml = '<div class="text-right"><a class="text-orange" href="javascript:void(0)">' +
            'Continue Reading</a></div>';
        return $(continueReadingLinkHtml);
    }

    function _generateBlogDetailsPage(blog) {
        var blogDetailsContainer = _blogDetailsContainer();
        var content = _getBlogContent(blog);
        blogDetailsContainer.append(content);
        var backToBlogLink = _backToBlogLink();
        blogDetailsContainer.append(backToBlogLink);
        return blogDetailsContainer;
    }

    function _getBlogContent(blog){
        var blogContentWrapper = $('<div class="form-group"></div>');
        var blogContent = blog.content.rendered;
        var blogContentElement = $(blogContent).wrap(blogContentWrapper);
        return blogContentElement;
    }

    function _blogDetailsContainer() {
        var container = '<div class="blog-details-container"></div>';
        return $(container);
    }

    function _backToBlogLink(){
        var html = '<div class="text-right"><a class="text-orange" href="javascript:void(0)">' +
            'Back to Blogs</a></div>';
        return $(html);
    };
})();

 // $.ajax({
        //     dataType: "json",
        //     url: 'http://localhost:7080/wordpress/wp-json/wp/v2/posts',
        //     success: success
        // });