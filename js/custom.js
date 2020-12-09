$(function () {
    

    
    let dataFRow;
    let dataSRow;
    $(".quote-quote-section .first-row .box-item .icon").on('click', function() {
        $(".quote-quote-section .second-row .box-item").removeClass('active');

        $('.quote-quote-section .inner-content .inner-box').hide();

        $(this).parents('.box-item').addClass('active').siblings().removeClass('active');
        dataFRow = $(this).data('f-row');
        $('.quote-quote-section .second-row').addClass('active');

        $("html, body").animate({
            scrollTop: $(".quote-quote-section .second-row").offset().top - 50
        }, 500);


    });

    
    $(".quote-quote-section .second-row .box-item .icon").on('click', function() {
        $(this).parents('.box-item').addClass('active').siblings().removeClass('active');
        dataSRow = $(this).data('s-row');

        $(this).parents('.rows-container').find(`.content_${dataFRow}${dataSRow}`).show().siblings('.inner-box').hide();
        
        $("html, body").animate({
            scrollTop: $(".quote-quote-section .inner-content").offset().top - 50
        }, 500);
    });
});