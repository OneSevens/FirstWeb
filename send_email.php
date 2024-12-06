<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Lấy dữ liệu từ form
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email nhận thông báo
    $toEmail = "yogurt.one7@gmail.com";
    $subject = "Thông báo mới từ form liên hệ";

    // Nội dung email
    $body = "
        <h2>Thông tin liên hệ</h2>
        <p><strong>Họ và tên:</strong> $name</p>
        <p><strong>Số điện thoại:</strong> $phone</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Nội dung:</strong></p>
        <p>$message</p>
    ";

    // Header email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: $email" . "\r\n";

    // Sử dụng mail() để gửi email
    if (mail($toEmail, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "Invalid Request";
}
?>
