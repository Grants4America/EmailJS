// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Initialize EmailJS with your API Key (User ID)
    emailjs.init("O9PaWuor-bfdg9keB");  // Replace with your actual API Key

    const form = document.getElementById("contactForm");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        emailjs.send("service_8yfnvf1", "template_j9ujikq", {  // Replace with your service ID and template ID
            name: name,
            email: email,
            message: message
        })
        .then(function(response) {
            alert("Message sent successfully!");
            form.reset();
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
    });
});
