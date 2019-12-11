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
				url: "mail.php",
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
				url: "mail.php",
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
	$(document).ready(function() {
		$('#form3').submit(function() {
			if (document.form3.name3.value == '' || document.form3.user_email3.value == '' ) {
				valid = false;
				return valid;
			}
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$('.fields3').addClass('fields_none');
				$('.note3').fadeIn(1000);
				$(this).find('input').val('');
				$('#form3').trigger('reset');
			});
			return false;
		});
	});
	$(document).ready(function() {
		$('#form4').submit(function() {
			if (document.form4.name4.value == '' || document.form4.user_email4.value == '' ) {
				valid = false;
				return valid;
			}
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$('.fields4').addClass('fields_none');
				$('.note4').fadeIn(1000);
				$(this).find('input').val('');
				$('#form4').trigger('reset');
			});
			return false;
		});
	});

	$(document).ready(function() {
		$('#form4').submit(function() {
			if (document.form5.name5.value == '' || document.form5.user_email5.value == '' ) {
				valid = false;
				return valid;
			}
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function() {
				$('.fields5').addClass('fields_none');
				$('.note5').fadeIn(1000);
				$(this).find('input').val('');
				$('#form5').trigger('reset');
			});
			return false;
		});
	});