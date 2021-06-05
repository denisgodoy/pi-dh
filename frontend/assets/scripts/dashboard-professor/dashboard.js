$(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("aside").toggleClass("toggled");
});

$(".close-bilboard").click(function(e) {
    e.preventDefault();
    $(".billboard").addClass("closeit");
});

