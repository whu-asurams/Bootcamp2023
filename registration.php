<!DOCTYPE html>
<html>
     <head>
        <meta charset="UTF-8">
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
    </head>
    <body>

<?php
$submitted = false;
if(strtoupper($_SERVER['REQUEST_METHOD']) == 'POST'){

//echo "HI";
//if ($submitted)
//    echo "submitted";
//else
//    echo "Not yet";
    
    $lastname       = $_POST['lastname'];
    $firstname      = $_POST['firstname'];
    $email          = $_POST['email'];
    $mobile         = $_POST['phone'];
   // $age            = $_POST['age']; 
    $grade          = $_POST['grade'];
    $school          = $_POST['school'];
    $gender          = $_POST['gender'];
    
    $checkLastname = false;
    $checkFirstname = false;    
    $checkEmail     = false;
    $checkAge = false;
    $checkGrade = false;
    $checkAll = false;

    if (strlen(trim($lastname))==0) {
        $lastname_error = "Last name must not be empty";
    } else{
        $checkLastname = true;
    }
    
    if (strlen(trim($firstname))==0) {
        $firstname_error = "First name must not be empty";

    } else{
        $checkFirstname = true;
    }
    
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)) {
        $email_error = "Please Enter Valid Email ID";

    } else{
        $checkEmail = true;
    }
 
 
    $checkGrade = true;
    
    $checkAll = $checkLastname && $checkFirstname && $checkEmail && $checkGrade;
    if($checkAll) {
        //echo "All checked";
        $submitted = addRecord();
        if($submitted){
            $lastname       = $firstname       = $email_error =$mobile             = $grade = $school = $gender = "";
            $lastname_error = $firstname_error = $email_error =$mobile =$age_error = "";
        }
    }
}
?>

<?php
if (!$submitted) {
?>
    <header class="container border border-3  mb-2 pt-3 pb-2 text-center text-uppercase text-success bg-info shadow-lg">
           <h1 class="fs-2 text-warning">2023 Albany State University Bootcamp in Web Design with HTML+CSS</h1>
        <p>ASU NASA STEM Summer Camp</p> 
    </header>
    <main class="container">
            <h4 class="text-danger">Please contact me if you do not hear from me 24 hours after your registration.</h4>    
            <!--
            <p class="text-danger">Due to a technical issue, one registration on June 1, 
            2023 is not successfully stored. Please contact me! Thank you!</p>    
            -->
      <form action="registration.php" method="post">
        <div class="text-warning">* Required </div>
        
        <div class="row">
            <div class="col col-3">
                <label> Last name: </label><br>                
            </div>
            <div class="col col-9">
                <input type="text" name="lastname" class="fs-6 w-50 h-100" value="" maxlength="50" required="">
                <span class="text-danger">*<?php if (isset($lastname_error)) echo $lastname_error; ?></span>  <br>              
            </div>
        </div>    

        <div class="row">
            <div class="col col-3">
                <label> First name: </label><br>                
            </div>
            <div class="col col-9">
                <input type="text" name="firstname" class="fs-6 w-50 h-100" value="" maxlength="50" required="">
                <span class="text-danger">*<?php if (isset($firstname_error)) echo $firstname_error; ?></span>  <br>              
            </div>
        </div>    

        <div class="row">
            <div class="col col-3">
                <label> Email: </label><br>                
            </div>
            <div class="col col-9">
                <input type="text" name="email" class="fs-6 w-50 h-100" value="" maxlength="50" required="">
                <span class="text-danger">*<?php if (isset($email_error)) echo $email_error; ?></span>  <br>              
            </div>
        </div>    

        <div class="row">
            <div class="col col-3">
                <label> Phone: </label><br>                
            </div>
            <div class="col col-9">
                <input type="text" name="phone" class="fs-6 w-50 h-100" value="" maxlength="50" required="">
                <span class="text-danger">*<?php if (isset($phone_error)) echo $phone_error; ?></span>  <br>              
            </div>
        </div>    

       <div class="row">
            <div class="col col-3">
                <label> Grade: </label><br>                
            </div>
            <div class="col col-9">
                <select name="grade" class="fs-6 w-50 h-100" value="" maxlength="50" required="">
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="College">College</option>                    
                </select>  
            </div>    
        </div>    

        <div class="row">
            <div class="col col-3">
                <label> School: </label><br>                
            </div>
            <div class="col col-9">
                <input type="text" name="school" class="fs-6 w-50 h-100" value="" maxlength="50" required="">
                <span class="text-danger"><?php if (isset($school_error)) echo $school_error; ?></span>  <br>              
            </div>
        </div>    


        <div class="row">
            <div class="col col-3">
                <label> Gender: </label><br>                
            </div>
            <div class="col col-9">
                <input type="text" name="gender" class="fs-6 w-50 h-100" value="" maxlength="200" required="">
                <span class="text-danger"><?php if (isset($gender_error)) echo $gender_error; ?></span>  <br>              
            </div>
        </div>    


          <input type="submit" value="Submit">
          <br><br>
       </form>
    </main>
<?php



} else {    

?>

        <header class="container border border-3  mb-2 pt-3 pb-2 text-center text-uppercase text-success bg-info shadow-lg">
           <h3>You have submitted succesfully. Please close this page. Please do not refresh this page, which will submit again! </h3>
        </header>
<?php

}

?>

<?php
function addRecord(){
    $servername = "localhost";
    $username = "backups6_whu";
    $password = "bootcamp@asu";
    $dbname   = "backups6_BOOTCAMP_ASU";
    $result = false;
    global $lastname, $firstname, $email, $mobile, $school, $gender, $age, $grade;

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    //echo "Connected successfully";

    $todayDate = date("Y:m:d h:i:s");
    //echo "today is " . $todayDate;
    
    $sql = "INSERT INTO MyGuests (firstname, lastname, email, phone, reg_date, school, sex, age, grade)"
       . "VALUES ('$firstname','$lastname', '$email', '$mobile', 
       '$todayDate',
       '$school', '$gender', '$age', '$grade')";


    if ($conn->query($sql) === TRUE) {
        echo "<p class='fs-3 text-center'>New record created successfully</p>";
        echo "<p class='fs-3 text-center'>Thanks for joining us. We will contact you very soon.</p>";
        $result = true;
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
    return $result;
}

?>

    </body>
</html>