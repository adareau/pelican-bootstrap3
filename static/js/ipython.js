jQuery(document).ready(function($) {
    $("div.collapseheader").click(function () {
    $header = $(this).children("span").first();
    $codearea = $(this).children(".input_area");
    console.log($(this).children());
    $codearea.slideToggle(500, function () {
        $header.text(function () {
            return $codearea.is(":visible") ? "" : " …";
        });
        $header.attr('class', function () {
            return $codearea.is(":visible") ? "fa fa-minus-square fa-1" : "fa fa-plus-square fa-1";
        });
    });
});
});
