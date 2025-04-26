// 🌐 CONTACT FORM SUBMISSION
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyeH1Lcc64EjdpAiAGIb5cnsAUDRi9LBwkhGSc7_ID0N0oTCzmn4g-ESIXA7recYgJo/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    }).then(() => {
        alert("✅ Message sent successfully!");
        document.getElementById("contactForm").reset();
        document.getElementById("responseMessage").innerText = "Message sent successfully!";
    }).catch(error => {
        alert("❌ Error sending message!");
        document.getElementById("responseMessage").innerText = "Error sending message.";
        console.error("Error:", error);
    });
});



