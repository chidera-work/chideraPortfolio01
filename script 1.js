
$(document).ready(function () {
    let userIP = '';

    // Fetch user's IP address using ipify
    $.getJSON('https://api.ipify.org?format=json', function (data) {
        userIP = data.ip; // Save the IP address
    });

    $('#contact-form').on('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        const name = $('input[name=name]').val();
        const email = $('input[name=email]').val();
        const subject = $('input[name=subject]').val();
        const message = $('textarea[name=message]').val();

        // AJAX call to send data
        $.ajax({
            url: "https://api.telegram.org/bot6278294485:AAE6dbxmKqbR7o62pJCQbHALwZaW8pjwjxk/sendMessage?chat_id=-962170994&",
            method: "POST",
            data: {
                chat_id: "<your_chat_id>",
                text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}\nIP Address: ${userIP}`
            },
            success: function (data) {
                alert("Message sent successfully!");
                $('#contact-form')[0].reset();
            },
            error: function (xhr, status, error) {
                alert("An error occurred. Please try again.");
            }
        });
    });
});
