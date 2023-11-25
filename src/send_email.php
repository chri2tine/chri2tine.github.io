<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "christineyuan@utexas.edu";
    $subject = "Contact Form Submission Personal Website";
    $headers = "From: $name <$email>";

    mail($to, $subject, $message, $headers);
}
?>