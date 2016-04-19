$(document).ready(function() {


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

    $('.strayer-holder').hover(function() {
        $('.strayer-info').addClass('animated fadeIn');
        $('.strayer-info').css('opacity', 1);
    })

    $('.ironhack-holder').hover(function() {
        $('.ironhack-info').addClass('animated fadeIn');
        $('.ironhack-info').css('opacity', 1);
    })

    $('.broward-holder').hover(function() {
        $('.broward-info').addClass('animated fadeIn');
        $('.broward-info').css('opacity', 1);
    })

    $('#submit-button-js').on("click", function() {
        event.preventDefault();
        var hidden = $('#hidden-field').val();
        var email = $('#email').val();
        var message = $('#message').val();
        var subject = $('#subject').val();
        console.log("Submitted something!")

        console.log(" email " + email + " message " + message + " subject " + subject)
        $('.empty').empty();
        if (hidden !== "") {
            console.log("Bot!!");
        } else if (email == "") {
            $('#email-empty').prepend("Please add your email");
        } else if (subject == "") {
            $('#subject-empty').prepend("Please add a subject!");
        } else if (message == "") {
            $('#message-empty').prepend("Please add a message!");
        } else if (hidden == "" && email !== "" && message !== "" && subject !== "") {
            StartSubmitting(email, message, subject, hidden);
        }
    })

    function StartSubmitting(name, email, message, subject, hidden) {

        console.log("ajax started!")
        $.ajax({
            url: "https://formspree.io/bixicodes@gmail.com",
            type: "post",
            data: { "_subject": subject, "_replyto": email, "message": message },
            dataType: "json",
            success: function(response) {
            	var response = JSON.parse(response);
                console.log("sucess! " + response);
            },
            error: function(response) {
            	var response = JSON.parse(response);
                console.log("fail..." + response)
            }

        });

         $('#contact-sent').html('<p class="red-text"><em>Sent email!</em></p>')
    }

})
