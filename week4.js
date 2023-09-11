const week4  = [[]];
const bypass4 = [[]];

week4[0][0] = '<u><b>Task 1: Complete your first webpage</b></u><br> '
+'<br></br><br></br><br></br><br></br><br></br><br></br>';

week4.push([[]]);
week4[1][0] = '<u><b>Task 1: Complete your second webpage</b></u><br> '
+'<br></br><br></br><br></br><br></br><br></br><br></br>';

week4.push([[]]);
week4[2][0] = '<u><b>Task 1: Complete your third webpage</b></u><br> '
+'<br></br><br></br><br></br><br></br><br></br><br></br>';

week4.push([[]]);
week4[3][0] = '<u><b>Task 1: Complete your fourth webpage</b></u><br> '
+'<br></br><br></br><br></br><br></br><br></br><br></br>';

week4.push([[]]);
week4[4][0] = '<u><b>Task 1: Wrap up</b></u><br> '
+'<br></br>';

week4[4][1] = '<u><b>Task 2: Take the quiz and survey, '
+'       </b></u><br>'
+'       <a href="./week4CheckList.php">Week 4: Check List</a><br>.'
+'       <a href="./week4survey.php">Week 4: Survey</a><br>.'
+'      <br> '
+'<br></br><br></br><br></br><br></br><br></br><br></br>';



bypass4[0][0] = '<u><b>Task 1: Complete your first webpage</b></u><br> ' 
+'<br></br><br></br><br></br><br></br><br></br><br></br>';

bypass4.push([[]]);
bypass4[1][0] = '<u><b>Task 1: Complete your second webpage</b></u><br> '
+'<br></br><br></br><br></br><br></br><br></br><br></br>';

bypass4.push([[]]);
bypass4[2][0] = '<u><b>Task 1: Complete your third webpage</b></u><br> '
+'<br></br><br></br><br></br><br></br><br></br><br></br>';

bypass4.push([[]]);
bypass4[3][0] = '<u><b>Task 1: Complete your fourth webpage</b></u><br> '
+'<br></br><br></br><br></br><br></br><br></br><br></br>';

bypass4.push([[]]);
bypass4[4][0] = '<u><b>Task 1: Wrap up</b></u><br> '
+'<br><br>';

bypass4[4][1] = '<u><b>Task 2: Take the quiz and survey, '
+'       </b></u><br>'
+'       <a href="./week4CheckList.php">Week 4: Check List</a><br>.'
+'       <a href="./week4survey.php">Week 4: Survey</a><br>.'
+'      <br><br> '
+'<br></br><br></br><br></br><br></br><br></br><br></br>';


$(document).ready(
    function(){
       addDailyTasks(week4, bypass4);
    }
);