const week2  = [[]];
const bypass2 = [[]];

week2[0][0]='<u><b>Task 1: Add styles to your HTML file</b></u><br> '
 +'<p>Create a CSS file, called <i>"myFramework-borderMarginPadding.css"</i>, and  '
 +'add the following class definitions for specifying border of an HTML elements '
 +'<br>&nbsp;&nbsp;&nbsp;&nbsp; border-start defines left border '
 +'<br>&nbsp;&nbsp;&nbsp;&nbsp; border-end defines right border '
+' <br>&nbsp;&nbsp;&nbsp;&nbsp; border-top defines top border '
+' <br>&nbsp;&nbsp;&nbsp;&nbsp; border-bottom defines bottom border. '
+'<br>&nbsp;&nbsp;&nbsp;&nbsp; border-0 defines no border '
+'<br>&nbsp;&nbsp;&nbsp;&nbsp; border-1 defines a border. '
+' </p> '
+'<br><br> '
+'.border { <br> '
+'&nbsp;&nbsp;&nbsp;&nbsp; border: 1px solid #dee2e6 !important; <br> '
+'} <br> '
+'.border-0 { <br> '
+'&nbsp;&nbsp;&nbsp;&nbsp; border: 0 !important; <br> '
+'} <br> '
+'.border-top { <br> '
+'&nbsp;&nbsp;&nbsp;&nbsp; border-top: 1px solid #dee2e6 !important; <br> '
+'} <br> '
+'.border-top-0 { <br> '
+'&nbsp;&nbsp;&nbsp;&nbsp; border-top: 0 !important; <br> '
+'} <br> '
+'.border-end { <br> '
+'&nbsp;&nbsp;&nbsp;&nbsp; border-right: 1px solid #dee2e6 !important; <br> '
+'} <br> '
+'.border-end-0 { <br> '
+'&nbsp;&nbsp;&nbsp;&nbsp; border-right: 0 !important; <br> '
+'} <br> '
+'.border-bottom { <br> '
+'&nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 1px solid #dee2e6 !important; <br> '
+'} <br> '
+'.border-bottom-0 { <br> '
+'&nbsp;&nbsp;&nbsp;&nbsp;border-bottom: 0 !important; <br> '
+'} <br> '
+'.border-start { <br> '
+'  &nbsp;&nbsp;&nbsp;&nbsp;border-left: 1px solid #dee2e6 !important; <br> '
+'} <br> '
+'.border-start-0 { <br> '
+'&nbsp;&nbsp;&nbsp;&nbsp;border-left: 0 !important; <br> '
+'} <br>';

week2[0][1]='<u><b>Task 2: Create a file, called <i>"example5.html"</i></b></u>'
+'<br> '
+'<p>Copy everything from "example4.html" to "example5.html", and add'
+'the following line inside head tag.'
+'<br>&lt;link rel="stylesheet" href="./myFramework-borderMarginPadding.css"&gt.'
+'<br>'
+'Add class "border" to any html elements in "example5.html". For example,'
+'you can add it to header tag, nav tag, main tag, aside tag,'
+'section tag, and footer tag.'
+'<br>&lt;header class="container-fluid border"&gt;.'
+'Your example5.html should look like <a href="./example5-1.html" target="_blank">this</a>.'
+'</p>'
+'<br></br>';

week2[0][2]='    <u><b>Task 3: Add styles for border color and border width to the CSS file</i></b></u>'
+'    <br>'
+'    Add the following code to myFramework-borderMarginPadding.css.'
+'    <br><br>'
+'    .border-primary {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-color: #0d6efd !important;<br>'
+'    }<br>'
+'    .border-secondary {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-color: #6c757d !important;<br>'
+'    }<br>'
+'    .border-success {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-color: #198754 !important;<br>'
+'    }<br>'
+'    .border-info {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-color: #0dcaf0 !important;<br>'
+'    }<br>'
+'    .border-warning {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-color: #ffc107 !important;<br>'
+'    }<br>'
+'    .border-danger {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-color: #dc3545 !important;<br>'
+'    }<br>'
+'    .border-light {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-color: #f8f9fa !important;<br>'
+'    }<br>'
+'    .border-dark {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-color: #212529 !important;<br>'
+'    }<br>'
+'    .border-white {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-color: #fff !important;<br>'
+'    }<br>'
+'    .border-1 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-width: 1px !important;<br>'
+'    }<br>'
+'    .border-2 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-width: 2px !important;<br>'
+'    }<br>'
+'    .border-3 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-width: 3px !important;<br>'
+'    }<br>'
+'    .border-4 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-width: 4px !important;<br>'
+'    }<br>'
+'    .border-5 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-width: 5px !important;<br>'
+'    }<br>'
+'    <br>'
+'    Add class "border-2 border-warning" to any html elements in "example5.html". For example,'
+'    you can add it to footer tag.'
+'    <br>'
+'    Your example5.html should look like <a href="./example5-2.html" target="_blank">this</a>.'
+   '<br><br>' ;

week2[0][3]  = '    <u><b>Task 4: Add styles for border with rounded corner into your CSS file</i></b></u>'
+'    <br>   '
+'    .rounded {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-radius: 0.25rem !important;<br>'
+'    }<br>'
+'    .rounded-0 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-radius: 0 !important;<br>'
+'    }<br>'
+'    .rounded-1 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-radius: 0.2rem !important;<br>'
+'    }<br>'
+'    .rounded-2 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-radius: 0.25rem !important;<br>'
+'    }<br>'
+'    .rounded-3 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-radius: 0.3rem !important;<br>'
+'    }<br>'
+'    .rounded-circle {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-radius: 50% !important;<br>'
+'    }<br>'
+'    .rounded-pill {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-radius: 50rem !important;<br>'
+'    }<br>'
+'    .rounded-top {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-top-left-radius: 0.25rem !important;<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-top-right-radius: 0.25rem !important;<br>'
+'    }<br>'
+'    .rounded-end {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-top-right-radius: 0.25rem !important;<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-bottom-right-radius: 0.25rem !important;<br>'
+'    }<br>'
+'    .rounded-bottom {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-bottom-right-radius: 0.25rem !important;<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-bottom-left-radius: 0.25rem !important;<br>'
+'    }<br>'
+'    .rounded-start {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-bottom-left-radius: 0.25rem !important;<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'        border-top-left-radius: 0.25rem !important;<br>'
+'    }<br>'
+'    <br>'
+'    Add class "rounded-circle border-3" to any html elements in "example5.html". For example,'
+'    you can add it to header tag. '
+'    <br>'
+'    Your example5.html should look like <a href="./example5-3.html" target="_blank">this</a>.'
+'    <br><br>  <br><br>'
+'    <p>Finally, your CSS file looks like'
+'        <a href="./myFramework-borderMarginPadding.txt" target="_blank">myFramework-borderMarginPadding.css</a>.'
+'    </p>'
+   '<br><br>' ;


week2.push([[]]);

week2[1][0]='<u><b>Task 1: </b></u><br>'
+'<p>Create a CSS file, called <i>"myFramework-text.css"</i> and add the following to your new CSS file.'
+'</p>'
+'&nbsp;&nbsp;&nbsp;&nbsp;fs   --- font size'
+'   <br> &nbsp;&nbsp;&nbsp;&nbsp;fst  --- font style such as italic'
+'   <br> &nbsp;&nbsp;&nbsp;&nbsp;fw   --- font weight such as bold '
+'<br><br>'
+'.font-monospace {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-family: var(--bs-font-monospace) !important;<br>'
+'}<br>'
+'.fs-1 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-size: calc(1.375rem + 1.5vw) !important;<br>'
+'}<br>'
+'.fs-2 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-size: calc(1.325rem + 0.9vw) !important;<br>'
+'}<br>'
+'.fs-3 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-size: calc(1.3rem + 0.6vw) !important;<br>'
+'}<br>'
+'.fs-4 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-size: calc(1.275rem + 0.3vw) !important;<br>'
+'}<br>'
+'.fs-5 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-size: 1.25rem !important;<br>'
+'}<br>'
+'.fs-6 {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-size: 1rem !important;<br>'
+'}<br>'
+'.fst-italic {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-style: italic !important;<br>'
+'}<br>'
+'.fst-normal {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-style: normal !important;<br>'
+'}<br>'
+'.fw-light {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-weight: 300 !important;<br>'
+'}<br>'
+'.fw-lighter {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-weight: lighter !important;<br>'
+'}<br>'
+'.fw-normal {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-weight: 400 !important;<br>'
+'}<br>'
+'.fw-bold {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-weight: 700 !important;<br>'
+'}<br>'
+'.fw-bolder {<br>&nbsp;&nbsp;&nbsp;&nbsp;'
+'  font-weight: bolder !important;<br>'
+'}  '
+   '<br><br>' ;

week2[1][1] ='<u><b>Task 2: </b></u><br>'
+'<p></p>'
+'<br>'
+'<p>'
+'Add the following line to your example5.html file:'
+'<br>&ltlink rel="stylesheet" href="./myFramework-text.css"&gt.'
+'</p><p>'
+'Add class <i>class= "fs-2"</i> to the h1 tag inside your header tag of your example5.html. '
+'Refresh your webpage and see what happens. Try other tags.'
+'</p>'
+'<br>'
+'Your example5.html should look like <a href="./example5-4.html" target="_blank">this</a>.'
+   '<br><br>' ;



week2[1][2]='<u><b>Task 3: </b></u><br>'
+'    <p>Add the following styles for text alignment and text decoration</p>'
+'    <br>'
+'    .text-start {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-align: left !important;<br>'
+'    }<br>'
+'    .text-end {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-align: right !important;<br>'
+'    }<br>'
+'    .text-center {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-align: center !important;<br>'
+'    }<br>'
+'    .text-decoration-none {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none !important;<br>'
+'    }<br>'
+'    .text-decoration-underline {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: underline !important;<br>'
+'    }<br>'
+'    .text-decoration-line-through {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: line-through !important;<br>'
+'    }<br>'
+'    .text-lowercase {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-transform: lowercase !important;<br>'
+'    }<br>'
+'    .text-uppercase {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-transform: uppercase !important;<br>'
+'    }<br>'
+'    .text-capitalize {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-transform: capitalize !important;<br>'
+'    }<br>'
+'    .text-wrap {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;white-space: normal !important;<br>'
+'    }<br>'
+'    .text-nowrap {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;white-space: nowrap !important;<br>'
+'    }<br>'
+'    /* rtl:begin:remove */<br>'
+'    .text-break {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;word-wrap: break-word !important;<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;word-break: break-word !important;<br>'
+'    }<br>'
+'    <p>'
+'    Add class <i>text-center text-capitalize</i> to the h1 tag inside your header tag of your example5.html. '
+'    Refresh your webpage and see what happens. Try other tags.'
+'    </p>'
+'    <br>'
+'    Your example5.html should look like '
+'    <a href="./example5-5.html" target="_blank">this</a>.'
+   '<br><br>' ;


week2[1][3]='<u><b>Task 4: </b></u><br>'
+'    <p>Add the following styles text colors</p>'
+'    /* rtl:end:remove */<br>'
+'    .text-primary {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #0d6efd !important;<br>'
+'    }<br>'
+'    .text-secondary {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #6c757d !important;<br>'
+'    }<br>'
+'    .text-success {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #198754 !important;<br>'
+'    }<br>'
+'    .text-info {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #0dcaf0 !important;<br>'
+'    }<br>'
+'    .text-warning {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #ffc107 !important;<br>'
+'    }<br>'
+'    .text-danger {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;  color: #dc3545 !important;<br>'
+'    }<br>'
+'    .text-light {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;  color: #f8f9fa !important;<br>'
+'    }<br>'
+'    .text-dark {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;  color: #212529 !important;<br>'
+'    }<br>'
+'    .text-white {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #fff !important;<br>'
+'    }<br>'
+'    .text-body {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #212529 !important;<br>'
+'    }<br>'
+'    .text-muted {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #6c757d !important;<br>'
+'    }<br>'
+'    .text-black-50 {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: rgba(0, 0, 0, 0.5) !important;<br>'
+'    }<br>'
+'    .text-white-50 {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: rgba(255, 255, 255, 0.5) !important;<br>'
+'    }<br>'
+'    .text-reset {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: inherit !important;<br>'
+'    }<br>   '
+'    Add class <i>text-succces</i> to the h1 tag inside your header tag of your example5.html. '
+'    Refresh your webpage and see what happens. Try other tags.'
+'    </p>'
+'    <br>'
+'    Your example5.html should look like '
+'    <a href="./example5-6.html" target="_blank">this</a>.'
+'    <br> <br>';

week2[1][4]='<u><b>Task 5: </b></u><br>'
+'    <p>Add the following styles background colors</p>'
+'    <br>'
+'    .bg-primary {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp;background-color: #0d6efd !important;<br>'
+'    }<br>'
+'    .bg-secondary {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp;background-color: #6c757d !important;<br>'
+'    }<br>'
+'    .bg-success {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp;background-color: #198754 !important;<br>'
+'    }<br>'
+'    .bg-info {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp; background-color: #0dcaf0 !important;<br>'
+'    }<br>'
+'    .bg-warning {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp; background-color: #ffc107 !important;<br>'
+'    }<br>'
+'    .bg-danger {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp; background-color: #dc3545 !important;<br>'
+'    }<br>'
+'    .bg-light {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp; background-color: #f8f9fa !important;<br>'
+'    }<br>'
+'    .bg-dark {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp; background-color: #212529 !important;<br>'
+'    }<br>'
+'    .bg-body {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp; background-color: #fff !important;<br>'
+'    }<br>'
+'    .bg-white {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp; background-color: #fff !important;<br>'
+'    }<br>'
+'    .bg-transparent {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp; background-color: transparent !important;<br>'
+'    }<br>'
+'    .bg-gradient {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp; background-image: var(--bs-gradient) !important;<br>'
+'    }<br>'
+'    <p>'
+'    Add class <i>bg-info</i> to the h1 tag inside your header tag of your example5.html. '
+'    Refresh your webpage and see what happens. Try other tags.'
+'    </p>'
+'    <br>'
+'    Your example5.html should look like '
+'    <a href="./example5-7.html" target="_blank">this</a>.'
+   '<br><br>' ;

week2[1][5]= '<u><b>Task 6: </b></u><br>'
+'        <p>Add the following styles for shadow</p>'
+'        <br>'
+'        .shadow {'
+'            <br> &nbsp;&nbsp;&nbsp;&nbsp; box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;'
+'            <br>}'
+'            <br>.shadow-sm {'
+'            <br> &nbsp;&nbsp;&nbsp;&nbsp; box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;'
+'            <br>}'
+'            <br>.shadow-lg {'
+'            <br> &nbsp;&nbsp;&nbsp;&nbsp; box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;'
+'            <br>}'
+'            <br>.shadow-none {'
+'            <br> &nbsp;&nbsp;&nbsp;&nbsp; box-shadow: none !important;'
+'        <br> }'
+'        <p>'
+'        Add class <i>shadow-lg</i> to the h1 tag inside your header tag of your example5.html. '
+'        Refresh your webpage and see what happens. Try other tags.'
+'        </p>'
+'        <br>'
+'        Your example5.html should look like '
+'        <a href="./example5-8.html" target="_blank">this</a>.'
+'        <br><br>'
+'          <p>See <a href="./myFramework-text.txt" target="_blank">myFramework-txt.css</a> for above styles together.'
+'          </p>  '
+   '<br><br>' ;


week2.push([[]]);    
week2[2][0]='<u><b>Task 1: TBA</b></u><br> &nbsp;&nbsp;&nbsp;&nbsp; '
+'<br>'
+' <p></p>  '

week2[2][1] ='   <u><b>Task 2: Understanding framework</b></u><br>'
+'   <p>Almost everything big company defines its own style framework, so -webkit-tap-highlight-color'
+'     all pages on the company\'s website look similar, or addressing '
+'     in the same way.'
+'   </p>';

week2[2][2]='<u><b>Task 3: Download bootstrp 5 framework</b></u><br>'
+'   <br>'
+'     <br>'
+'     <br>';

week2[2][3]=' <u><b>Task 4: Define your own framework part 1 - Typograpy</b></u><br>'
+'   <br>';



week2[2][4] ='  <u><b>Task 5: Understand CSS units - vw, rem, px</b></u><br'
+'<br>'
+'<br>';




week2.push([[]]);    
week2[3][0]='<u><b>Task 1: Use your own css framework</b></u><br> &nbsp;&nbsp;&nbsp;&nbsp;' 
+'      <br>';

week2[3][1]='<u><b>Task 2: styles for container, row and column</i></b></u><br>'
+'    <br>';


week2[3][2]='<u><b>Task 3: Create a CSS file, called <i>myFramework-rowColumn.css</i></b></u><br>'
+'<br>';

week2[3][3]='<u><b><Task 4: Now add more contents to your "example4.html"</b></u><br> '
+'<br>';


week2.push([[]]);    
week2[4][0]='<u><b>Task 1: Find four templates of your webpages</b></u><br>  '
+'      <br>'
+'    <br>';

week2[4][1]='<u><b>Task 2: Complete what you have left</b></u><br>'
+'      <br>';


week2[4][2]='<u><b>Task 3: Take the quiz and survey,    '  
+'       </b></u><br>'
+'       <a href="./week1quiz.php">Week 1: Pop quiz</a><br>.'
+'       <a href="./week1survey.php">Week 1: Survey</a><br>.'
+'      <br> ';



bypass2[0][0]='<u><b>Task 1: Add styles to your HTML file</b></u><br> '
+'<br>' 
+'<p>Read <a href="./myFramework-borderMarginPadding.txt"'
+' target="_blank">myFramework-borderMarginPadding.css</a>, ' 
+'and get familiar with the styles for border, margin and padding. </p>'
+'<p>Copy everything from "example4.html" to "example5.html", and add'
+'the following line inside head tag.'
+'<br>&lt;link rel="stylesheet" href="./myFramework-borderMarginPadding.css"&gt.'
+'<br>'
+'Add class "border" to any html elements in "example5.html". For example,'
+'you can add it to header tag, nav tag, main tag, aside tag,'
+'section tag, and footer tag.'
+'<br>&lt;header class="container-fluid border"&gt;.'
+'Your example5.html should look like <a href="./example5-1.html" target="_blank">this</a>.'
+'</p>'
+'<br></br>';

bypass2[0][2]='    <u><b>Task 2: Add styles for border color and border width to the CSS file</i></b></u>'
+'    <br>'
+'    Add class "border-2 border-warning" to any html elements in "example5.html". For example,'
+'    you can add it to footer tag.'
+'    <br>'
+'    Your example5.html should look like <a href="./example5-2.html" target="_blank">this</a>.'
+   '<br><br>' ;

bypass2[0][3]  = '    <u><b>Task 3: Add styles for border with rounded corner into your CSS file</i></b></u>'
+'    <br>   '

+'    Add class "rounded-circle border-3" to any html elements in "example5.html". For example,'
+'    you can add it to header tag. '
+'    <br>'
+'    Your example5.html should look like <a href="./example5-3.html" target="_blank">this</a>.'
+'    <br><br>  <br><br>'
+'    <p>Finally, your CSS file looks like'
+'        <a href="./myFramework-borderMarginPadding.txt" target="_blank">myFramework-borderMarginPadding.css</a>.'
+'    </p>'
+   '<br><br>' ;


week2.push([[]]);

week2[1][0]='<u><b>Task 1: Style framework for text</b></u><br>'
+'<br>'
+'<p>Read <a href="./myFramework-text.txt"'
+' target="_blank">myFramework-text.css</a>, ' 
+'and get familiar with the styles for text, . </p>'
+'Add the following line to your example5.html file:'
+'<br>&ltlink rel="stylesheet" href="./myFramework-text.css"&gt.'
+'</p><p>'
+'Add class <i>class= "fs-2"</i> to the h1 tag inside your header tag of your example5.html. '
+'Refresh your webpage and see what happens. Try other tags.'
+'</p>'
+'<br>'
+'Your example5.html should look like <a href="./example5-4.html" target="_blank">this</a>.'
+   '<br><br>' ;



week2[1][2]='<u><b>Task 3: </b></u><br>'
+'    <p>Add the following styles for text alignment and text decoration</p>'
+'    <br>'
+'    .text-start {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-align: left !important;<br>'
+'    }<br>'
+'    .text-end {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-align: right !important;<br>'
+'    }<br>'
+'    .text-center {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-align: center !important;<br>'
+'    }<br>'
+'    .text-decoration-none {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: none !important;<br>'
+'    }<br>'
+'    .text-decoration-underline {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: underline !important;<br>'
+'    }<br>'
+'    .text-decoration-line-through {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-decoration: line-through !important;<br>'
+'    }<br>'
+'    .text-lowercase {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-transform: lowercase !important;<br>'
+'    }<br>'
+'    .text-uppercase {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-transform: uppercase !important;<br>'
+'    }<br>'
+'    .text-capitalize {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;text-transform: capitalize !important;<br>'
+'    }<br>'
+'    .text-wrap {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;white-space: normal !important;<br>'
+'    }<br>'
+'    .text-nowrap {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;white-space: nowrap !important;<br>'
+'    }<br>'
+'    /* rtl:begin:remove */<br>'
+'    .text-break {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;word-wrap: break-word !important;<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;word-break: break-word !important;<br>'
+'    }<br>'
+'    <p>'
+'    Add class <i>text-center text-capitalize</i> to the h1 tag inside your header tag of your example5.html. '
+'    Refresh your webpage and see what happens. Try other tags.'
+'    </p>'
+'    <br>'
+'    Your example5.html should look like '
+'    <a href="./example5-5.html" target="_blank">this</a>.'
+   '<br><br>' ;


week2[1][3]='<u><b>Task 4: </b></u><br>'
+'    <p>Add the following styles text colors</p>'
+'    /* rtl:end:remove */<br>'
+'    .text-primary {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #0d6efd !important;<br>'
+'    }<br>'
+'    .text-secondary {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #6c757d !important;<br>'
+'    }<br>'
+'    .text-success {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #198754 !important;<br>'
+'    }<br>'
+'    .text-info {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #0dcaf0 !important;<br>'
+'    }<br>'
+'    .text-warning {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #ffc107 !important;<br>'
+'    }<br>'
+'    .text-danger {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;  color: #dc3545 !important;<br>'
+'    }<br>'
+'    .text-light {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;  color: #f8f9fa !important;<br>'
+'    }<br>'
+'    .text-dark {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp;  color: #212529 !important;<br>'
+'    }<br>'
+'    .text-white {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #fff !important;<br>'
+'    }<br>'
+'    .text-body {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #212529 !important;<br>'
+'    }<br>'
+'    .text-muted {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: #6c757d !important;<br>'
+'    }<br>'
+'    .text-black-50 {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: rgba(0, 0, 0, 0.5) !important;<br>'
+'    }<br>'
+'    .text-white-50 {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: rgba(255, 255, 255, 0.5) !important;<br>'
+'    }<br>'
+'    .text-reset {<br>'
+'    &nbsp;&nbsp;&nbsp;&nbsp; color: inherit !important;<br>'
+'    }<br>   '
+'    Add class <i>text-succces</i> to the h1 tag inside your header tag of your example5.html. '
+'    Refresh your webpage and see what happens. Try other tags.'
+'    </p>'
+'    <br>'
+'    Your example5.html should look like '
+'    <a href="./example5-6.html" target="_blank">this</a>.'
+'    <br> <br>';

week2[1][4]='<u><b>Task 5: </b></u><br>'
+'    <p>Add the following styles background colors</p>'
+'    <br>'
+'    .bg-primary {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp;background-color: #0d6efd !important;<br>'
+'    }<br>'
+'    .bg-secondary {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp;background-color: #6c757d !important;<br>'
+'    }<br>'
+'    .bg-success {<br>'
+'        &nbsp;&nbsp;&nbsp;&nbsp;backg
bypass2.push([[]]);
bypass2.push([[]]);
bypass2.push([[]]);

bypass2.push([[]]);
bypass2[4][2]='<u><b>Task 3: Take the quiz and survey, '
+'       </b></u><br>'
+'       <a href="./week1quiz.php">Week 1: Pop quiz</a><br>.'
+'       <a href="./week1survey.php">Week 1: Survey</a><br>.'
+'      <br> ';



$(document).ready(
    function(){
       addDailyTasks(week2, bypass2);
    }
);