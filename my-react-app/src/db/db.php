<?php
$servername = "mydb.ics.purdue.edu";
$username = "gill113";
$password = "johncena";
$dbname = "gill113";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
