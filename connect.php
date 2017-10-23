<?php
$servername = "localhost";
$username = "root";
$password = "auviitk";
$dbname = "mydb";
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['sub'];
$message = $_POST['message'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO name (name, Email, Subject, MESSAGE)
VALUES ('$name' , '$email' , '$subject' , '$message')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
