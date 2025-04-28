$(document).ready(function () {
    $('.tab').click(function () {
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').removeClass('active');
        $('#' + $(this).data('tab')).addClass('active');

        $(".que-question").click(function () {
            $(".que-answer").not($(this).next()).slideUp();
            $(this).next(".que-answer").slideToggle();
            $(this).next(".que-answer").is(":visible");
        });
    });
});

