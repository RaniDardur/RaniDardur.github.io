$('.block-price__btn').click(function(){
	var price = $(this).data('price'),
		product = $(this).data('product');
	$('#price').val(price);
	$('#product').val(product);
	$('#myModal').modal();
	return false;
});