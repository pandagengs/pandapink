// event
$('.page-scroll').on('click',function() {
	// ambil isi href
	var tujuan= $(this).attr('href');
	//tangkap elemen
	var elemenHref = $(tujuan);



$('body').animate({
	scrollTop: elemenHref.offset().top -50
	
}, 1000,'easeInOutExpo');

}); 




