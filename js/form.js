$(document).ready(function() {
	$('#form').submit(function() {
		if (document.form.name.value == '' || document.form.user_email.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$('.fields').addClass('fields_none');
			$('.note').fadeIn(1000);
			$(this).find('input').val('');
			$('#form').trigger('reset');
		});
		return false;
	});
});