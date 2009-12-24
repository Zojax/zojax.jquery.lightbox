$(document).ready(
    function(){
	$.Lightbox.construct({
	    "ie6_upgrade": false,
	    "show_linkback": false,
	    "download_link": false,
	    "files": {
		js: {},
		css: {},
		images: {
                    prev:    '++resource++jqueryLightbox/prev.gif',
                    next:    '++resource++jqueryLightbox/next.gif',
                    blank:   '++resource++jqueryLightbox/blank.gif',
                    loading: '++resource++jqueryLightbox/loading.gif'
                }
	    }
	});
    }
);
