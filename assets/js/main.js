AOS.init();
$(document).ready(function() {
    $(".tab-btn").click(function () {
        $(".tab-btn").removeClass("active");
        $(this).addClass("active");
    });
});