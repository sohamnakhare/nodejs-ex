var blogs = [
    {
        date: '10 May 2016',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "+
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "+
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "+
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: 'The standard Lorem Ipsum passage, used since the 1500s'
    },
    {
        date: '10 May 2016',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "+
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "+
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "+
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: 'The standard Lorem Ipsum passage, used since the 1500s'
    },
    {
        date: '10 May 2016',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "+
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "+
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "+
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: 'The standard Lorem Ipsum passage, used since the 1500s'
    },
    {
        date: '10 May 2016',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, "+
        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, "+
        "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure "+
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "+
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: 'The standard Lorem Ipsum passage, used since the 1500s'
    }
];

$(document).ready(
    $(function () {
        $.each(blogs, function(i, blog){
            var blogHtml = getBlogHtml(i, blog);
            $('#blogs').append(blogHtml);
        });

        function getBlogHtml(i, blog){
            var html = '';
            html += '<div class="col-xs-12 blog '+
                        (i!= blogs.length -1 ? 'bottom-border-grey-thick' : '')+
                    '">'
            html += '<div class="form-group">';
            html += '<div style="font-size:16px">'+blog.date+'</div>';
            html += '<strong>'+blog.heading+'</strong>';
            html += '</div>';
            html += '<div class="blog-content">'+blog.content+'...</div>';
            html += '<div class="text-right"><a class="text-orange" href="#">Continue Reading</a></div>';
            html += '</div>';

            return html;
        }
    })
)