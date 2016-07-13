$(document).ready(function() {
    $('.menu-parent').on('click', function(){
        $(this).toggleClass('active');
        $('.pane').toggleClass('pane-display');
        $('.sidebar').toggleClass('sidebar-toggle');
        $('.section-wrapper').toggleClass('section-position')
        })
});
