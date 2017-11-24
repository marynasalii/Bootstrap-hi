$('.btn-group > button:first-of-type').on('click', function (e) {
    $('.print').hide();
    $('.design').hide();
    $('.photography').show();
    $(this).addClass('selected-item');
    $('.btn-group > button:not(:first-of-type)').removeClass('selected-item');
});
$('.btn-group > button:nth-of-type(2)').on('click', function (e) {
    $('.photography').hide();
    $('.print').hide();
    $('.design').show();
    $(this).addClass('selected-item');
    $('.btn-group > button:not(:nth-of-type(2))').removeClass('selected-item');
});
$('.btn-group > button:nth-of-type(3)').on('click', function (e) {
    $('.photography').hide();
    $('.design').hide();
    $('.print').show();
    $(this).addClass('selected-item');
    $('.btn-group > button:not(:nth-of-type(3))').removeClass('selected-item');
});