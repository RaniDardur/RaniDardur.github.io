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

$(document).ready(function() {
	$('#form1').submit(function() {
		if (document.form1.name1.value == '' || document.form1.user_email1.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail1.php",
			data: $(this).serialize()
		}).done(function() {
			$('.fields1').addClass('fields_none');
			$('.note1').fadeIn(1000);
			$(this).find('input').val('');
			$('#form1').trigger('reset');
		});
		return false;
	});
});

$(document).ready(function() {
	$('#form2').submit(function() {
		if (document.form2.name2.value == '' || document.form2.user_email2.value == '' ) {
			valid = false;
			return valid;
		}
		$.ajax({
			type: "POST",
			url: "mail2.php",
			data: $(this).serialize()
		}).done(function() {
			$('.fields2').addClass('fields_none');
			$('.note2').fadeIn(1000);
			$(this).find('input').val('');
			$('#form2').trigger('reset');
		});
		return false;
	});
});
