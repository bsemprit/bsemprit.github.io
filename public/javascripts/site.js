$(document).ready(function() {


    console.log("start")

    $(".welcome-left-text").hide();
    $(".welcome-right-text").hide();

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '../public/javascripts/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });

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

    function StartSubmitting(email, message, subject, hidden) {

        console.log("ajax started!")
        $.ajax({
            url: "https://formspree.io/bixicodes@gmail.com",
            type: "post",
            data: { "_subject": subject, "_replyto": email, "message": message },
            dataType: "json",
            success: function(response) {
                console.log("sucess! " + response);
	         $('#contact-sent').html('<p class="red-text"><em>Sent email!</em></p>')
            },
            error: function(response) {
                console.log("fail..." + response)
            }

        });

    }

})
