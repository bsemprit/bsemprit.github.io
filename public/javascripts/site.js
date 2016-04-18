$(document).ready( function() {


	console.log("start")
	$(".welcome-left-text").hide();
	$(".welcome-right-text").hide();

	$(".left-side-text").mouseenter(function() {
		$(".welcome-left-text").fadeIn();
		console.log("Fade")
	})

	$(".left-side-text").mouseleave(function() {
		$(".welcome-left-text").fadeOut();
		console.log("Fade")
	})

	$(".right-side-text").mouseenter(function() {
		$(".welcome-right-text").fadeIn();
		console.log("Fade")
	})

	$(".right-side-text").mouseleave(function() {
		$(".welcome-right-text").fadeOut();
		console.log("Fade")
	})

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', '../public/javascripts/particles.json', function() {
	console.log('callback - particles.js config loaded');
	});
	
	$('.strayer-holder').hover(function(){
		$('.strayer-info').addClass('animated fadeIn');
		$('.strayer-info').css('opacity', 1);
	})

	$('.ironhack-holder').hover(function(){
		$('.ironhack-info').addClass('animated fadeIn');
		$('.ironhack-info').css('opacity', 1);
	})

	$('.broward-holder').hover(function(){
		$('.broward-info').addClass('animated fadeIn');
		$('.broward-info').css('opacity', 1);
	})

	$('#submit-button-js').on("click", function(){
		event.preventDefault();
		var hidden = $('#hidden-field').val();
		nameSubject = $('#name').val();
		email = $('#email').val();
		message = $('#textarea1').val();
		console.log("Submitted something!")

		console.log("name " + nameSubject + " email " + email+ "message " + message)

		if (hidden !== "0") {
			console.log("Bot!!");
		}
		else if (email == "") {
			$('#email').after("Please add your email")
		}
		else if (nameSubject == "") {
			$('#name').after("Please add your name or subject")
		}
		else if (message == "") {
			$('#textarea1').after("Please add a message!")
		}
		else if (hidden == "0" && nameSubject !== "" && email !== "" && message !== "") {
			StartSubmitting();
		}
	})

	function StartSubmitting(){
		
		console.log("ajax started!")
		$.ajax({
			url: "public/php/contact.php",
			type: "get",
			data: {"action": "send", "nameSubject": nameSubject, "email": email, "message": message},
			success: function(data, status) {
				console.log(data + status);

				if(data == "ok") {
			          $('#contact-sent').html('<p class="red-text"><em>Sent email!</em></p>')
		        }
			},
			error: function(response) {
				console.log(response)
			}

		});
	}

})