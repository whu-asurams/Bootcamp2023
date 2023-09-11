<!DOCTYPE HTML>  
<html>
<head>
<style>

.error {color: #FF0000;}
</style>
</head>
        <link rel="stylesheet" href="./myFramework-typography.css">
        <link rel="stylesheet" href="./myFramework-container.css">
        <link rel="stylesheet" href="./myFramework-rowColumn.css">
        <link rel="stylesheet" href="./myFramework-border.css">
        <link rel="stylesheet" href="./myFramework-corner.css">
        <link rel="stylesheet" href="./myFramework-margin.css">
        <link rel="stylesheet" href="./myFramework-padding.css">
        <link rel="stylesheet" href="./myFramework-widthHeight.css">
        <link rel="stylesheet" href="./myFramework-text.css">
        <link rel="stylesheet" href="./myFramework-backgroundColor.css">
        <link rel="stylesheet" href="./myFramework-shadow.css">
        <link rel="stylesheet" href="./myFramework-navigation.css">
<body>  

<?php
// define variables and set to empty values

$result = retrieveRecord();
$count = 1;

?>


  <header class="container-fluid border border-3 text-center text-capitalize text-success bg-info shadow-lg">
    <h2 class="fs-2">Registration Records</h2>
  </header>

  <main class="container-fluid  mt-3">


  <table class="border border-2  bg-light">  
    <tr>
        <th>#</th>
        <th>Last name</th>
        <th>First Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Grade</th>
        <th>Age</th>
        <th>School</th>
        <th>Gender</th>
        <th>Registration Date</th>        
    </tr>
    <?php
  
     if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
    ?>
    <tr>
        <td><?php echo $count; $count++;?></td>
        <td><?php echo $row["lastname"];?></td>
        <td><?php echo $row["firstname"];?></td>
        <td><?php echo $row["email"];?></td>
        <td><?php echo $row["phone"];?></td>
        <td><?php echo $row["grade"];?></td>
        <td><?php echo $row["age"];?></td>
        <td><?php echo $row["school"];?></td>
        <td><?php echo $row["sex"];?></td>
        <td><?php echo $row["reg_date"];?></td>
    </tr>
    
    <?php
        }
    }
    ?>
    
  </table>
  </main>

   <footer class="container-fluid border text-center bg-info rounded-2 pt-1 mt-3">
        Albany State University
    </footer>



<?php

function retrieveRecord(){
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
    $sql = "SELECT * FROM MyGuests";
    $result = $conn->query($sql);
    /*
    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
        }
    }
    */

    $conn->close();
    return $result;
}
?>

</body>
</html>