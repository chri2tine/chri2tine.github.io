<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    if(empty($name) || empty($email) || empty($message)) {
        echo "Please fill out all fields.";
        exit;
    }

    $to = "christineyuan@utexas.edu";
    $subject = "Contact Form Submission Personal Website";
    $headers = "From: $name <$email>";
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    if(mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Email failed to send.";
    }
}
?>