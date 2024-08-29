document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
      fullName: document.getElementById("fullName").value,
      address: document.getElementById("address").value,
      age: document.getElementById("age").value,
      sex: document.getElementById("sex").value,
      maritalStatus: document.getElementById("maritalStatus").value,
      nationality: document.getElementById("nationality").value,
      cellNumber: document.getElementById("cellNumber").value,
      occupation: document.getElementById("occupation").value,
      monthlyIncome: document.getElementById("monthlyIncome").value,
      email: document.getElementById("email").value,
      delivery: document.getElementById("delivery").value,
    };

    emailjs.send("service_8yfnvf1", "template_s0qnuv7", formData).then(
      function (response) {
        alert("Message sent successfully!");
        form.reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
      }
    );
  });
});
