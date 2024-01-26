function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "leoleonardo2000@gmail.com",
        Password: "30F512E0DB7A650EB25499687F7407145866",
        To: 'leonardo.gomiero.c.c@gmail.com',
        From: "you@isp.com",
        Subject: "This is the subject",
        Body: "Name: " + document.getElementById("name").value +
            "<br> Email: " + document.getElementById("email").value +
            "<br> Subject: " + document.getElementById("subject").value +
            "<br> Message: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Successfully")
    );
}