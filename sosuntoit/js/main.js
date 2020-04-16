$(".sidebar-menu-item").click(function (e) {
    e.stopPropagation();
    $(this).siblings('.sidebar-menu-dropdown').slideToggle();
    $(this).children('.dropdown-arrow').toggleClass('rotate');
});

$("#sub-menu-control").click(function (e) {
    e.stopPropagation();
    $('#navigation-sub-menu').fadeToggle();
})

$(".nav-bar-page").click(function (e) {
    e.stopPropagation();
    $('.nav-page-box').fadeToggle();
})