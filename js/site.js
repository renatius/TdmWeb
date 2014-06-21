window.siteMgr = (function(window, document, undefined) {

    var siteMgr = {};

    siteMgr.createHeaderNavBar = function() {
        var $nav = $('<nav></nav>');
        var $ul = $('<ul></ul>');

        var links = [
            { text: 'home', title: 'follow this link to go to the home page', href: 'index.htm' },
            { text: 'links', title: 'follow this link to go to my collection of link', href: 'links.htm' },
            { text: 'blog', title: 'follow this link to go to my Wordpress blog', href: 'http://renatomancuso.wordpress.com/' }
        ];

        $.each(links, function(index, value) {
            var $a = $('<a></a>').attr({href: value.href, title: value.title}).html(value.text);
            var $li = $('<li></li>');
            $li.append($a);
            $ul.append($li);
        });

        $nav.append($ul);

        $('#page > header').append($nav);
    };

    siteMgr.createPageFooter = function() {
        var html = '<footer>' +
                   '<p>Copyright &copy; 2011 Renato Mancuso</p>' + 
                   '</footer>';

        $('#page').append($(html));
    };

    siteMgr.setPageDefaults = function() {
        $('#page').addClass('box-shadow');
        $('#page').addClass('border-radius');
    };

    siteMgr.disableLinksToCurrentPage = function (context) {
        var url = document.URL;

        if(url === 'http://www.renatomancuso.com' || url === 'http://www.renatomancuso.com/')
            url = 'http://www.renatomancuso.com/index.htm'; 

        $('a', context).each(function(){
            if(this.href === url ){
                $(this).addClass('current');
                $(this).unbind('click');
                $(this).bind('click', function(e) { return false; });
                $(this).attr('title', '');
            }
        });
    };

    return siteMgr;

})(this, this.document);


$(document).ready(function() {
    siteMgr.createHeaderNavBar();
    // siteMgr.createPageFooter();
    siteMgr.setPageDefaults();
    siteMgr.disableLinksToCurrentPage('nav');
});
