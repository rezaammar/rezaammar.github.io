//paralax
$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    //konten produk
    if( wScroll > $('.konten-produk').offset().top - 250) {
        $('.konten-produk .thumbnail').addClass('muncul');
    }

});
/*
$('.konten-produk .thumbnail').each(function(i)
setTimeout(function() {
    $('.konten-produk .thumbnail').eq(i).addClass('muncul');
}, 300 * (i));
  )*/