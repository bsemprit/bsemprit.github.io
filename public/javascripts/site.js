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
		$(this).preventDefault()
		console.log("Submitted something!")
	})

})