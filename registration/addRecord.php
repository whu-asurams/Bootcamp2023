<?php
$servername = "localhost";
$username = "backups6_whu";
$password = "bootcamp@asu";
$dbname   = "backups6_BOOTCAMP_ASU";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

echo "Connected to the bootcamp database";

/*
// sql to create table
$sql = "CREATE TABLE MyGuests (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
firstname VARCHAR(30) NOT NULL,
lastname VARCHAR(30) NOT NULL,
email VARCHAR(50),
reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
school VARCHAR(50) NOT NULL,
sex    VARCHAR(30),
age    INT(2) UNSIGNED
)";

if ($conn->query($sql) === TRUE) {
  echo "Table MyGuests created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}
*/
/*
$sql = "INSERT INTO MyGuests (firstname, lastname, email, phone, reg_date, school, sex, age)
VALUES ('John', 'Doe', 'john@example.com', '5/20/2023', 'Monroe High', 'M', '16')";
*/
$sql = "INSERT INTO MyGuests (firstname, lastname, email, phone, reg_date, school, sex, age)"
       . "VALUES ('$firstname','$lastname', 'email', '$phone', 
       'date(\"l jS \of F Y h:i:s A\")', 
       '$school', '$gender', '$age')";


if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
  echo "Thanks for joining us!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>