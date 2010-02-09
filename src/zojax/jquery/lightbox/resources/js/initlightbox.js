$(document).ready(
function(){
$.Lightbox.construct({
"ie6_upgrade": false,
"show_linkback": false,
"download_link": false,
"files": {js: {},
css: {},
images: {
    prev:'++resource++jquery.lightbox/images/prev.gif',
    next:'++resource++jquery.lightbox/images/next.gif',
    blank:'++resource++jquery.lightbox/images/blank.gif',
    loading:'++resource++jquery.lightbox/images/loading.gif'}
}});
});