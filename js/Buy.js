$(window).scroll(function() {
    $('li[isLoaded != 1]').each(function() {
        var oT = $(this).offset().top;
        var sT = $(window).scrollTop();
        var cH = $(window).height();
        if (sT + cH >= oT) {
            var s = $(this).find('img').attr('Imgsrc');
            $(this).find('img').attr('src', s);
            $(this).attr('isLoaded', 1);
        }

    })
})