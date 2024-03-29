const week1  = [[]];

week1[0][0]='  <u><b>Task 1:</b></u><br>'
+'    <p>Setup your computer or laptop.</p> '
+'     <br>';
     
week1[0][1]='     <u><b>Task 2:</b></u><br>'
+'     <p>Coding in VSC</p>'
+'     <ul>'
+'       <li> Create a folder, namely <i>"2023Bootcamp"</i> and open it inside VSC</li>'
+'       <li> Inside VSC, create a <i>"myWebpage.html"</i> file</li>'
+'       <li> Type in a minimum html structre, see the reference '
+'             <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">'
+'               https://www.w3schools.com/html/html_intro.asp</a>  '    
+'         <br>'
+'         <br>&lt!DOCTYPE html&gt'
+'         <br>&lthtml&gt'
+'         <br>&lthead&gt'
+'         <br> &lttitle&gtPage Title&lt/title&gt'
+'         <br> &lt/head&gt'
+'         <br>&ltbody&gt'
+'         <br>  '
+'         <br>&lth1&gtMy First Heading&lt/h1&gt'
+'         <br> &ltp&gtMy first paragraph.&lt/p&gt'
+'         <br>'
+'         <br>&lt/body&gt'
+'         <br> &lt/html&gt'
+'       </li>'
+'       <li> Add other html elements:'
+'           <br>'
+'           <table class="table table-bordered border">'
+'             <tr><th>Tag name</th><th>Example</th></tr> '
+'             <tr><td>&ltheader&gt &lt/header&gt</td><td>&ltheader&gt Welcome to my website &lt/header&gt</td></tr>'
+'             <tr><td>&ltnav&gt &lt/nav&gt</td><td>&ltnav&gt Menu1 &lt/nav&gt</td></tr> '
+'             <tr><td>&ltmain&gt&lt/main&gt</td><td>&ltmain&gt Aside and sections &lt/main&gt</td></tr>'
+'             <tr><td>&ltaside&gt&lt/aside&gt</td><td>&ltaside&gt Menus &lt/aside&gt</td></tr>'
+'             <tr><td>&ltsection&gt&lt/section&gt</td><td>&ltsection&gt&lt/section&gt</td></tr>'
+'             <tr><td>&ltp&gt&lt/p&gt</td><td>&ltp&gt This is my first webpage&lt/p&gt</td></tr>'
+'             <tr><td>&lth3&gt&lt/h3&gt</td><td>&lth3&gt Introduction &lt/h3&gt</td></tr>'
+'             <tr><td>&lth4&gt&lt/h4&gt</td><td>&lth4&gt Course work&lt/h4&gt</td></tr>'
+'             <tr><td>&ltbr&gt</td><td>&ltbr&gt</td></tr>'
+'             <tr><td>&lthr&gt</td><td>&lthr&gt</td></tr>'
+'             <tr><td>&ltimg&gt</td><td>&ltimg src="mypicutre.jpg" width="300px" height="200px"&gt</td></tr>'
+'             <tr><td>&ltul&gt&lt/ul&gt</td><td>&ltul&gt&lt/ul&gt</td></tr>'
+'             <tr><td>&ltli&gt&lt/li&gt</td><td>&ltli&gt&lt/li&gt</td></tr>'
+'             <tr><td>&ltfooter&gt&lt/footer&gt</td><td>&ltfooter&gtCopyright: Albany State University&lt/footer&gt</td></tr>    '                            
+'             <tr><td>&ltdiv&gt&lt/div&gt</td><td>&ltdiv class="container"&gt TBA&lt/div&gt</td></tr>          '                                                          
+'         </table>'
+'       </li>'
+'     </ul>'
+'     <br><br>'
+'     <p>See <a href="./example1.html" target="_blank">Example 1</a> for an example. The source code is '
+'           <a href="./example1.txt" target="_blank"> Example 1 source code</a></p>'
+'</div>';


week1.push([[]]);    

week1[1][0]=' <u><b>Task 1:</b></u><br>'
    +'<p>Create a new file called <i>"myFrameWork.css"</i>, and complete the following jobs</p>'
    +'  <br>'
    +'  <ul>'
    +'        <li>Add the following items to myFrameWork.css file:'
    +'          <br> header{'
    +'              <br>  &nbsp;&nbsp;&nbsp;&nbsp;background-color: #f1f1f1; '
    +'          <br>  &nbsp;&nbsp;&nbsp;&nbsp;padding: 30px; '
    +'         <br>  &nbsp;&nbsp;&nbsp;&nbsp;text-align: center; '
    +'          <br> &nbsp;&nbsp;&nbsp;&nbsp;font-size: 35px;'
    +'          <br>}'
    +'        </li>'
    +'      </ul>';
    
week1[1][1] ='<u><b>Task 2:</b></u><br>'
    +'  Try more style properties:'
    +'  See <a href="../styles/CSS-properties-basic.txt" target="_blank">this file</a> for a list of style properties.'
    +'  <br>'
    +'  <br>'
    +'  <p>'
    +'        border <br>'
    +'        padding <br>'
    +'        margin <br>'
    +'        width <br>'
    +'        max-width <br>'
    +'        min-width <br>'
    +'        height <br>'
    +'        max-height <br>'
    +'        min-height <br>'
    +'        background-color <br>'
    +'        background-image <br>'
    +'        box-shaddow <br>'
    +'        overflow <br>'
    +'        <br>'
    +'        <br>'
    +'      </p>'
    +'  <br>'
    +'  <br>';

week1[1][2]='<u><b>Task 3:</b></u><br>'
    +'  <p>Create an html file, called <i>"example2.html"</i>. Copy everything from'
    +'     "example1.html" to it.'
    +'         <br>'
    +'         Add the following line to the head section of "example2.html":'
    +'         <br>'
    +'         &ltlink rel="stylesheet" .css"&gt.'
    +'      </p>'
    +' <p>'
    +'        See <a href="./example2.html" target="_blank">Example2.html</a> for an example.'
    +'        Its source file is <a href="./example2.txt" target="_blank">Example2.html source code</a>.'
    +'         The style file is  '
    +'        <a href="./example2.txt" target="_blank">Example2.css</a>. '
    +'      </p>';
      

week1.push([[]]);    
week1[2][0]='<u><b>Task 1: Styles based on "class"</b></u><br> '
+'<br>'
+' Create a file <i>"example3.css"</i> and copy contents from '
+' <i>example2.css</i> to <i>example3.css</i>.'
+' Do the following inside "example3.css"'
+' <ul>'
+'     <li>replace "header" by ".container1"</li>'
+'     <li>replace "nav" by ".navigate"</li>'
+'     <li>replace "main" by ".container2"</li>'
+'     <li>replace "main > aside" by ".col-2"</li>'
+'     <li>replace "main > section" by ".col-10"</li>'
+'     <li>replace "footer" by ".container3"</li>'
+'   </ul>'
+'   <br>'
+'   Now create a file, called <i>"example3.html"</i> and copy'
+'   contents from <i>example2.html</i> to <i>example3.html</i>'
+'   <br>'
+'   Do the followinng'
+'   <ul>'
+'     <li>Replace line 4 to &ltlink rel="stylesheet" href="example3.css"&gt</li>'
+'     <li>replace &ltheader&gt by &ltheader class="container1"&gt</li>'
+'     <li>replace &ltnav&gt by &ltnav class="navigate"&gt</li>'
+'     <li>replace &ltmain&gt by &ltmain class="container2"&gt</li>'
+'     <li>replace &ltaside id="as"&gt by &ltaside id="as" class="column-2"&gt</li>'
+'     <li>replace &ltsection id="aa"&gt by &lt section id="aa" class="column-10"&gt</li>'
+'     <li>replace &ltfooter&gt by &lt footer class="container3"&gt</li>'
+'   </ul> '
+'   <p>'
+'     Your html file looks like  <a href="./example3h.html" target="_blank">Example3.html</a>.'
+'     Its source file is <a href="./example3h.txt" target="_blank">Example3.html source code</a>.'
+'     <br> '
+'     Your css file looks like <a href="./example3.txt" target="_blank">Example3.css</a>.  '
+'   </p>';

week1[2][1] ='   <u><b>Task 2: Understanding framework</b></u><br>'
+'   <br>'
+'   <p>Too many options are not always good. In a framework, you can Define'
+'   a list of classes and let each html elements belong to one or more'
+'   classes. For example, you can define a class called "container" and'
+'   let &ltheader&gt, &ltmain&gt, and others belong to this class.'
+'   </p>'
+'   <br>'
+'   <p>In that way, you limit options and have your own framework, which is just like clothing that you only like certain'
+'   types of clothing, which defines you and your way'
+'   </p>'
+'   <p>Almost everything big company defines its own style framework, so -webkit-tap-highlight-color'
+'     all pages on the company\'s website look similar, or addressing '
+'     in the same way.'
+'   </p>';

week1[2][2]='<u><b>Task 3: Download bootstrp 5 framework</b></u><br>'
+'   <br.'
+'   <a href="https://github.com/twbs/bootstrap/releases/download/v5.0.2/bootstrap-5.0.2-dist.zip">'
+'     Bootstrap 5 framework download</a>'
+'     <br>'
+'     Unzip the file and copy the following files to your project folder: bootstrap.css'
+'     <br> Open bootstrap.css and see how it is designed.'
+'     <br>'
+'     <br>';

week1[2][3]=' <u><b>Task 4: Define your own framework part 1 - Typograpy</b></u><br>'
+'   <br>'
+'   <p>'
+'   In this task 4, you will define your way of basic html tags, such as body, h1, h2, ..., h6, p, etc'
+'   Those are called typography.'
+'   </p>'
+'   <p>First, createa a file, called "myFramework-typography.css". '
+'     Then, define our own typography in two steps.'
+'   </p>'
+'   <ul>'
+'     <li><b>Step 1: Define CSS variables representing basic colors and also font-family to be used as default value.'
+'       <br><br>'
+'     </b>Add the following to the "myFramework-typography.css" file. You change the values to your favorite ones. Change it back to'
+'         what is provided here.'
+'      <br>   :root {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    font-size: 2vw; '
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    --bs-blue: #0d6efd;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    --bs-indigo: #6610f2;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-purple: #6f42c1;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-pink: #d63384;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-red: #dc3545;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-orange: #fd7e14;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-yellow: #ffc107;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-green: #198754;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-teal: #20c997;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-cyan: #0dcaf0;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-white: #fff;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    --bs-gray: #6c757d;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    --bs-gray-dark: #343a40;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    --bs-primary: #0d6efd;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-secondary: #6c757d;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    --bs-success: #198754;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-info: #0dcaf0;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-warning: #ffc107;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    --bs-danger: #dc3545;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    --bs-light: #f8f9fa;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-dark: #212529;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));'
+'        <br>   }'
+'        <br>  <br>  '
+'        <br>  @media (prefers-reduced-motion: no-preference) {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     :root {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;      scroll-behavior: smooth;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    }  '
+'        <br>  }  '
+'        <br>    '
+'        </li>'
+'        <li><b>Step 2: Add the foolwoing to the file "myFramework-typography.css"</b>'
+'          <br>  *,'
+'          <br>  *::before,'
+'          <br>  *::after {  '
+'          <br> &nbsp;&nbsp;&nbsp;&nbsp;     box-sizing: border-box;'
+'          <br>  }  '
+'          <br>  <br>  '
+'        <br>  body{'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    margin: 0;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    font-family: var(--bs-font-sans-serif);'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    font-size: 1rem;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    font-weight: 400;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    line-height: 1.5;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    color: #212529;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    background-color: #fff;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    -webkit-text-size-adjust: 100%;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);'
+'        <br>  }'
+'      <br>   h6, .h6, h5, .h5, h4, .h4, h3, .h3, h2, .h2, h1, .h1 {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     margin-top: 0;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     margin-bottom: 0.5rem;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     font-weight: 500;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;      line-height: 1.2;'
+'        <br>     }'
+'        <br>     '
+'        <br>    h1, .h1 {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;        font-size: calc(1.375rem + 1.5vw);'
+'        <br>   }'
+'        <br>     @media (min-width: 1200px) {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;       h1, .h1 {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;         font-size: 2.5rem;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;       }'
+'        <br>      }'
+'        <br>   '
+'        <br>    h2, .h2 {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;       font-size: calc(1.325rem + 0.9vw);'
+'        <br>   }'
+'        <br>   @media (min-width: 1200px) {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     h2, .h2 {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;      font-size: 2rem;'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;   }'
+'        <br>   }'
 +'       <br>    '
+'        <br>    h3, .h3 {   '
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;      font-size: calc(1.3rem + 0.6vw);    '
+'        <br>    }  '
+'        <br>     @media (min-width: 1200px) {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;       h3, .h3 {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;        font-size: 1.75rem;        '
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;       }        '
+'        <br>     }'
+'        <br>           '
+'        <br>     h4, .h4 {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;       font-size: calc(1.275rem + 0.3vw);'
+'        <br>     }'
+'        <br>   @media (min-width: 1200px) {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp;     h4, .h4 {'
+'        <br> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;      font-size: 1.5rem;'
+'          <br> &nbsp;&nbsp;&nbsp;&nbsp;     }'
+'          <br>    }'
+'          <br>   '
+'          <br>   h5, .h5 {   '
+'          <br> &nbsp;&nbsp;&nbsp;&nbsp;     font-size: 1.25rem;'
+'                <br>    }  '
+'                <br>    '
+'         <br>    h6, .h6 {  '
+'          <br> &nbsp;&nbsp;&nbsp;&nbsp;      font-size: 1rem;'
+'                  <br>    }'
+'                  <br>     '
+'         <br>    p {'
+'              <br> &nbsp;&nbsp;&nbsp;&nbsp;      margin-top: 0;'
+'              <br> &nbsp;&nbsp;&nbsp;&nbsp;       margin-bottom: 1rem;'
+'              <br> &nbsp;&nbsp;&nbsp;&nbsp;       font-size: 1rem;'
+'              <br>   }'
 +'        </li>'
+'         </ul'
+'                        <p>Finally, add this CSS file to your example3.html by adding'
+'                            <br> &ltlink rel="stylesheet" href="../styles/myFramework-typography.css"&gt'
+'                          <br> inside the &lthead&gt tag. Resize the window and observe the changes.'
+'                        </p>'
+'                        <p>You can check here for the <a href="../styles/myFramework-typography.txt" target="_blank">myFramework-typography.css file.</a>'
+'                          <br>'
+'                          Your example3.html looks like <a href="./example3a.html" target="_blank">example3.html</a>.'
+'                           Its source code is <a href="./example3a.txt" target="_blank">example3.html source code</a> '
+'                        </p>';



week1[2][4] ='  <u><b>Task 5: Understand CSS units - vw, rem, px</b></u><br'
+'<br'
+'<p>1 rem =  2vw, since the first line inside :root{...} is "font-size: 2vw"'
+'</p'
+'<p>1 vw  =  1 percent of the screen width (or viewport width). Hence 1vw may means different size when you resize the window.'
+'</p>'
+'<p>1px   =  the width of 1 pixel, i.e., 1 dot on the screen.</p>'
+'<p>If you resize the webpage to width of 800px, then </p>'
+'<p>  1vw  = 8px </p>'
+'<p>   2vw  = 16px</p>'
+'<p>and</p>'
+'<p>   1rem = 2vw = 16px</p>'
+'<p>   1.25rem = 1.25 * (16px) = 20px;</p>'
+'<p>  1.75rem = 1.75 * (16px) = 28px;</p>'
+'<p>  1.75rem + 0.3vw = 20px + 0.3 * 8 = 22.4px</p>'
+'<br>';




week1.push([[]]);    
week1[3][0]='<u><b>Task 1: Use your own css framework</b></u><br> &nbsp;&nbsp;&nbsp;&nbsp;' 
+'      <br>'
+'    <p>Create a new html file, called <i>example4.html</i>, and copy all from '
+'   "example3.html" to "example4.html". Replace the following two lines '
+'     <br>         &ltlink rel="stylesheet" href="example3.css"&gt'
+'     <br> &ltlink rel="stylesheet" href="myFramework-typography.css"&gt'
+'      <br>'
+'      by these three lines'
+'     <br> &ltlink rel="stylesheet" href="myFramework-typography.css"&gt.'
+'      <br> &ltlink rel="stylesheet" href="myFramework-container.css"&gt.'
+'      <br> &ltlink rel="stylesheet" href="myFramework-rowColumn.css"&gt.'
+' </p>';

week1[3][1]='<u><b>Task 2: styles for container, row and column</i></b></u><br>'
+'    <br>'
+'    <br>'
+'   <p>Create a new CSS file, called <i>myFramework-container.css</i>, '
+'     </p>'
+'      <p>Add the following to that files'
+'      <br><br>'
+'        /****************************************************'
+'          *<br>'
+'          *    Container<br>'
+'       ****************************************************/  <br> '
+'     <br> '
+'     .container,<br> '
+'      .container-fluid,<br> '
+'      .container-xxl,<br>'
+'      .container-xl,<br> '
+'      .container-lg,<br> '
+'     .container-md,<br> '
+'      .container-sm {<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'          width: 100%;<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'         padding-right: var(--bs-gutter-x, 0.75rem);<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'          padding-left: var(--bs-gutter-x, 0.75rem);<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'          margin-right: auto;<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'          margin-left: auto;<br> '
+'      }<br> '
+'    <br> '
+'      @media (min-width: 576px) {<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'         .container-sm, .container {<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'            &nbsp;&nbsp;&nbsp;&nbsp;   max-width: 540px;<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'          }<br> '
+'      }<br>'
+'      @media (min-width: 768px) {<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'         .container-md, .container-sm, .container {<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'            &nbsp;&nbsp;&nbsp;&nbsp;    max-width: 720px;<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'          }<br>'
+'      }<br> '
+'      @media (min-width: 992px) {<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'          .container-lg, .container-md, .container-sm, .container {<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'            &nbsp;&nbsp;&nbsp;&nbsp;   max-width: 960px;<br> &nbsp;&nbsp;&nbsp;&nbsp;'
+'         }<br> '
+'      }<br>  '
+'      &media (min-width: 1200px) {<br> &nbsp;&nbsp;&nbsp;&nbsp; '
+'          .container-xl, .container-lg, .container-md, .container-sm, .container {<br> &nbsp;&nbsp;&nbsp;&nbsp; '
+'             &nbsp;&nbsp;&nbsp;&nbsp;   max-width: 1140px;<br> &nbsp;&nbsp;&nbsp;&nbsp; '
+'      }<br>  '
+'      media (min-width: 1400px) {<br> &nbsp;&nbsp;&nbsp;&nbsp; '
+'          .container-xxl, .container-xl, .container-lg, .container-md, .container-sm, .container {<br> &nbsp;&nbsp;&nbsp;&nbsp;' 
+'              &nbsp;&nbsp;&nbsp;&nbsp;   max-width: 1320px;<br> &nbsp;&nbsp;&nbsp;&nbsp; '
+'      }<br>'
+'      </p>'  
+'<p>Your file looks like  '
+' <a href="../styles/myFramework-container.txt"  target="_blank">myFramework-container.css</a>   '
+'inside that file, there styles for row and columns, <b>TYPE</b> them inside your "myFramework-container.css" file '
+'</p>'
+ '<p>Add class name <i>container</i> or <i>container-fluid</i> to your <i>header</i> element. '
+'<br><br>Your file can be upgraded to <a href="./example4.html" target="_blank">example4.html</a>. Its'
+'source code is <a href="./example4.txt" target="_blank">example4.txt</a>. '
+'</p><br><br><br>';


week1[3][2]='<u><b>Task 3: Create a CSS file, called <i>myFramework-rowColumn.css</i></b></u><br>'
+'    <br>'
+'    Open this file  '
+'<a href= "../styles/myFramework-rowColumn.txt" target="_blank"> styles for row and column </a> '
+'and type into your "myFramework-rowColumn.css". '
+'Add the style file <i><a href="../styles/myFramework-rowColumn.txt" target="_blank">myFramework-rowColumn.css</a></i> to your HTML file. '
+ 'Add class name "row" to the &ltmain&gt element. <br>'
+ 'Add class name "col col-2" to the &ltaside&gt element. <br>'
+ 'Add class name "col" to the &ltsection&gt element. <br>'
+'<br>Your file can be upgraded to <a href="./example4.html" target="_blank">example4.html</a>. Its'
+'source code is <a href="./example4.txt" target="_blank">example4.html</a>. '
+'</p><br><br><br> ';

week1[3][3]='<u><b>Task 4: Add more contents to your "example4.html"</b></u><br> '
+'      <br>'
+'For a reference, you can use the contents from  '
+'<a href="./example4.html"  target="_blank">example4.html</a>. It does not '
+'look nice at this moment. We will polish it next week after we introduced '
+'styles. '
+'The source file can be found here, '
+'<a href="./example4.txt"  target="_blank">example4.html source file</a> '
+'</p><br><br><br> ';


week1.push([[]]);    
week1[4][0]='<u><b>Task 1: Find four templates of your webpages</b></u><br>  '
+'      <br>'
+'      <p>Using the keyword "templates of webpage" to search online for '
+'        four templates of your webpages. For example, if you are going to '
+'        build a website for a restaurant, you can search for "templates of '
+'         restaurant webpage". If you are going to build a website for a '
+'        school, you can search for "templates of school webpage". '
+'        <br>'
+'        If you are create a website for applying for college, search "templates'
+'         of college application webpage". '
+'         <br> When you like a template, download it to your folder. We will'
+'         create them using what we will learn in next two weeks.'
+'        <br>'
+'        Here is a picutre of what I got when search in "Microsoft Bing"'
+'         <img src="template.jpg" alt="templates" width="100%">'
+'       </p>';

week1[4][1]='<u><b>Task 1: Add contents to your HTML file & modify style files</b></u><br>'
+'<br>'
+'<p>Add more contents to your html file.'
+' Remmember to add one container a time. Inside the container, you can add a row and inside the row, add several columns.'
+'Your html file will be a stack of containers which contains a row and several columns.'
+'</p>'
+'<p> Modify the style file <i><a href="../styles/myFramework-typography.txt" target="_blank">myFramework-typography.css</a></i> and see what will happen to your HTML file. '
+'<br>Modify the style file <i><a href="../styles/myFramework-container.txt" target="_blank">myFramework-container.css</a></i> and see what will happen to your HTML file. '
+'<br>Modify the style file <i><a href="../styles/myFramework-rowColumn.txt" target="_blank">myFramework-rowColumn.css</a></i> and see what will happen to your HTML file. '
+'<br><br>';



week1[4][2]='<u><b>Task 3: Take the quiz and survey,    '  
+'       </b></u><br>'
+'       <a href="./week1CheckList.php">Week 1: Check List</a><br>.'
+'       <a href="./week1survey.php">Week 1: Survey</a><br>.'
+'      <br> ';



const bypass1 =[[]];
bypass1[0][0]= '<u><b>Task 1: Create a folder for your project</b></u><br>'
+'      <p>Open your file explorer, create a folder for your project and name it as "Bootcamp23".'
+'        <br><br>';

bypass1[0][1]='<u><b>Task 2: Create a file called "index.html"</b></u><br>' 
+'      <p>Open your VSC and create a file called "index.html" '
+'        <br>'
+'      <p>Understand the basic structure of a HTML file, see the link below'
+'        <br>'
+'        <a href="./example0.html" target="_blank">HTML Minimum Structure</a>'
+'        The source file can be found <a href="./example0.txt"> here</a>. '
+'  </p>'
+'        <br><br>';

bypass1[0][2]='<u><b>Task 3: Use the basic HTML tags</b></u><br>'
+'      <p>These are basic tags - &lth1&gt-&lth6&gt, &ltdiv&gt, &ltp&gt, '
+'      &ltspan&gt, &ltbr&gt, &ltimg&gt, &ltul&gt, &ltol&gt, &ltli&gt, &lta&gt,'
//+'       &lttable&gt, &lttr&gt, &lttd&gt, &ltth&gt, &ltthead&gt, &lttbody&gt, '
//+'      &lttfoot&gt, &ltform&gt, &ltinput&gt, &ltbutton&gt, &ltselect&gt, &ltoption&gt,'
//+'       &ltlabel&gt, &ltiframe&gt, &ltcanvas&gt, &ltvideo&gt, &ltaudio&gt, &ltembed&gt,'
//+'       &ltobject&gt, '
+'      &ltscript&gt, &ltstyle&gt, &ltlink&gt, &ltmeta&gt, &lttitle&gt,'
+'       &lthead&gt, &ltbody&gt,'
+'      &lthtml&gt, &lt!DOCTYPE&gt, &lt!-- --&gt,'
+'      <p>See the link below'
+'        <br>'
+'        <a href="./example1.html" target="_blank">A simple and rough webpage</a>'
+'        The source file can be found <a href="./example1.txt" target="_blank"> here</a>. '
+'  </p>'
+'        <br><br>';

bypass1.push([[]]);
bypass1[1][0]='<u><b>Task 1: Create a new file, called <i>"example1.css"</i></b></u><br>'
+'      <p>Open your VSC and create a file called "example1.css" '
+'        <br>'
+'      </p>'
+'      <p>Type the following code into your "example1.css" file. '
+'        <br>'
+'  header{'
+'  <br> &nbsp;&nbsp;&nbsp;&nbsp; background-color: #f1f1f1;'
+'   <br> &nbsp;&nbsp;&nbsp;&nbsp; padding: 30px;'
+'  <br>  &nbsp;&nbsp;&nbsp;&nbsp; text-align: center;'
+'  <br>  &nbsp;&nbsp;&nbsp;&nbsp; font-size: 35px;'
+'  <br> }'
+'   <br><br>   Such a file is called <i>Cascading Style File (or CSS file)</i> </p>'
+'      <p>The file now looks like <a href= "./example1a.txt" target="_blank"> example1.css </a> '
+'      <p>Now link the CSS file to your HTML file by adding the following line '
+'      to the &lthead&gt section of your HTML file. '
+'      </p>'
+'      <p>&ltlink rel="stylesheet" href="./example1.css"&gt</p>'
+'      <p> Your HTML file now looks like <a href= "./example1.html" target="_blank"> example1.html </a> '
+'<br><br>';

bypass1[1][1]='<u><b>Task 2: More stydles</b></u><br>'
+'  Add more styles to your CSS file, and rename it as "example2.css". '
+'  You can open <a href="./example2.css" target="_blank">example2.css</a> and  <br>'
+'  <a href="./example2.html" target="_blank">example2.html</a> to see the result. '
+'  <br><br>';

bypass1.push([[]]);
bypass1[2][0]='<u><b>Task 1: Styles based on classes</b></u><br>'
+'<br>'
+'<p>We will style the following HTML file using a different way, called <i>Style Framework</i>.'
+'By framework, we mean that we will use a set of pre-defined styles, and we will use '
+'them to style our HTML file.'
+'The pre-defined styles are called <i>classes</i>.'
+'We style an HTML element when we set it belongs to a class, as fllows.'
+'<br>&nbsp;&nbsp;&nbsp;&nbsp;&ltheader class="container bg-light"&gtblah &lt/header&gt<br>'
+'Above declaration let the <i>header</i> belong to two classes: "container" and "bg-light".'
+'Your file can be upgraded to <a href="./example3.html" target="_blank">example3.html</a> and'
+'  <a href="./example3.txt" target="_blank">example3.css</a>. '
+'</p><br><br><br>';



bypass1[2][1]='<u><b>Task 2: Understanding framework</b></u><br>'
+'<br>'
+'<p>In the wollowing, we will use a set of pre-defined style classes, which'
+' follows a more powerful framework, called <i>Bootstrap</i>.'
+'We have a set of style classes. They are divided into several groups.'
+'<ul>'
+'<li>Layout: container</li>'
+'<li>Layout: row, col</li>'
+'<li>Typography: h1, h2, h3, p, etc.</li>'
+'<li>Utility: Border, margins and padding</li>'
+'<li>Text</li>'
+'<li>Position</li>'
+'<li>Navigation </li>'
+'<li>etc.</li>'
+'</ul>';

bypass1[2][2]='<u><b>Task 3: Define and use your own framework-step 1</b></u><br>'
+'<br>'
+'<p>In step one, we define the basic settings of our framework. They are '
+'the default values for font size, font family, font color, and some frequently used color values.'
+'</p>'
+'<p>Your file can be upgraded to <a href="./example3a.html" target="_blank">example3a.html</a> and '
+'  <a href="../styles/myFramework-typography.txt" target="_blank">myFramework-typography.css</a>. '
+'You can resize your webpage window and see what happens.</p><br><br><br>';




bypass1.push([[]]);
bypass1[3][0]='<u><b>Task 1: Create and use styles for container</b></u><br>'
+'<br>'
+'<p>Read the <i><a href="../styles/myFramework-container.txt" target="_blank">myFramework-container.css</a></i> file and '
+'understand styles for container, container-fluid. </p>'
+'<p>Remove the <i><a href="./example3.txt" target="_blank">example3.css</a></i> file from your HTML file. '
+'<br>Add the style file <i><a href="../styles/myFramework-typography.txt" target="_blank">myFramework-typography.css</a></i> to your HTML file. '
+ '<br>Add the style file <i><a href="../styles/myFramework-container.txt" target="_blank">myFramework-container.css</a></i> to your HTML file. '
+ 'Add class name <i>container</i> or <i>container-fluid</i> to your <i>header</i> element. '
+'<br>Your file can be upgraded to <a href="./example4.html" target="_blank">example4.html</a>. Its'
+' source code is <a href="./example4.txt" target="_blank">example4.txt</a>. '
+'</p><br><br><br>';

bypass1[3][1]='<u><b>Task 2: Create and use styles for row and column</b></u><br>'
+'<br>'
+'<p>Read the <i><a href="../styles/myFramework-rowColumn.txt" target="_blank">myFramework-rowColumn.css</a></i> file and '
+'understand styles for row and columns. </p>'
+'<p>Add the style file <i><a href="../styles/myFramework-rowColumn.txt" target="_blank">myFramework-rowColumn.css</a></i> to your HTML file. '
+ '<br>Add class name "row" to the &ltmain&gt element. <br>'
+ 'Add class name "col col-2" to the &ltaside&gt element. <br>'
+ 'Add class name "col" to the &ltsection&gt element. <br>'
+'<br>Your file can be upgraded to <a href="./example4.html" target="_blank">example4.html</a>. Its'
+' source code is <a href="./example4.txt" target="_blank">example4.txt</a>. '
+'</p><br><br><br>';




bypass1[3][2]='<u><b>Task 3: Modify style files and see what happen</b></u><br>'
+'<br>'
+'<p>Modify the style file <i><a href="../styles/myFramework-typography.txt" target="_blank">myFramework-typography.css</a></i> and see what will happen to your HTML file. '
+'<br>Modify the style file <i><a href="../styles/myFramework-container.txt" target="_blank">myFramework-container.css</a></i> and see what will happen to your HTML file. '
+'<br>Modify the style file <i><a href="../styles/myFramework-rowColumn.txt" target="_blank">myFramework-rowColumn.css</a></i> and see what will happen to your HTML file. '
+'<br><br>';


bypass1.push([[]]);
bypass1[4][0]='<u><b>Task 1: Add contents to HTML file & modify style files</b></u><br>'
+'<br>'
+'<p>Add more contents to your html file.'
+' Remmember to add one container a time. Inside the container, you can add a row and inside the row, add several columns.'
+' Your html file will be a stack of containers which contain rows and several columns.'
+'</p>'
+'<p> Modify the style file <i><a href="../styles/myFramework-typography.txt" target="_blank">myFramework-typography.css</a></i>'
+' and see what will happen to your HTML file. '
+'<br>Modify the style file <i><a href="../styles/myFramework-container.txt" target="_blank">myFramework-container.css</a></i> '
+' and see what will happen to your HTML file. '
+'<br>Modify the style file <i><a href="../styles/myFramework-rowColumn.txt" target="_blank">myFramework-rowColumn.css</a></i> and'
+' see what will happen to your HTML file. '
+'<br><br>';


bypass1[4][1]='<u><b>Task 2: Find four templates of your webpages</b></u><br>  '
+'      <br>'
+'      <p>Using the keyword "templates of webpage" to search online for '
+'        four templates of your webpages. For example, if you are going to '
+'        build a website for a restaurant, you can search for "templates of '
+'         restaurant webpage". If you are going to build a website for a '
+'        school, you can search for "templates of school webpage". '
+'        <br>'
+'        If you are create a website for applying for college, search "templates'
+'         of college application webpage". '
+'         <br> When you like a template, download it to your folder. We will'
+'         create them using what we will learn in next two weeks.'
+'        <br>'
+'        Here is a picutre of what I got when search in "Microsoft Bing"'
+'         <img src="template.jpg" alt="templates" width="100%">'
+'       </p>'
+'      <br><br>';

bypass1[4][2]='<u><b>Task 3: Take the quiz and survey,    '  
+'       </b></u><br>'
+'       <a href="./week1CheckList.php">Week 1: Check List</a><br>.'
+'       <a href="./week1survey.php">Week 1: Survey</a><br>.'
+'      <br> ';



pages1=[[]];
pages1[0][0]='<u><b>List of files to be created today</b></u><br>';
+'      <br><b><u>webpages</u></b><br>'
+'         <a href="./example1.html" target="_blank">example1.html</a>. Its source '
+' code is <a href="./example1.txt" target="_blank"> example1.txt</a> <br>'
+'      <br><br><b><u>CSS files</u></b><br>'
+'<br><br><br><br><br><br><br><br>';



pages1.push([[]]);
pages1[1][0]='<u><b>List of files to be created today</b></u><br>'
+'      <br><b><u>webpages</u></b><br>'
+'         <a href="./example1.html" target="_blank">example1.html</a>. Its source '
+' code is <a href="./example1.txt" target="_blank"> example1.txt</a> <br>'
+'      <br><br><b><u>CSS files</u></b><br>'
+'<br><br><br><br><br><br><br><br><br>';

pages1.push([[]]);
pages1[2][0]='<u><b>List of files to be created today</b></u><br>'
+'      <br><b><u>webpages</u></b><br>'
+'         <a href="./example1.html" target="_blank">example1.html</a>. Its source '
+' code is <a href="./example1.txt" target="_blank"> example1.txt</a> <br>'
+'         <a href="./example2.html" target="_blank">example2.html</a>. Its source '
+' code is <a href="./example2.txt" target="_blank"> example2.txt</a> <br>'
+'      <br><br><b><u>CSS files</u></b><br>'
+'         <a href="./example1.css" target="_blank">example1.css</a>. Its source '
+' code is <a href="./example1a.txt" target="_blank"> example1.css</a> <br>'
+'         <a href="./example2.css" target="_blank">example2.css</a>. Its source '
+' code is <a href="./example2.css" target="_blank"> example2.css</a> <br>'
+'<br><br><br><br><br><br>';

pages1.push([[]]);
pages1[3][0]='<u><b>List of files to be created today</b></u><br>'
+'      <br><b><u>webpages</u></b><br>'
+'         <a href="./example3.html" target="_blank">example3.html</a>.'
//+' code is <a href="./example1.txt" target="_blank"> example1.txt</a> <br>'
+'         <a href="./example3a.html" target="_blank">example3a.html</a>. '
//+' code is <a href="./example3a.txt" target="_blank"> example3a.txt</a> <br>'
+'      <br><br><b><u>CSS files</u></b><br>'
+'         <a href="./example3.css" target="_blank">example3.css</a>. <br>'
//+' code is <a href="./example3.css" target="_blank"> example3.css</a> <br>'
+'         <a href="../styles/myFramework-typography.css" target="_blank">myFramework-typography.css</a>. '
//+' code is <a href="../styles/myFramework-typography.css" target="_blank"> myFramework-typography.css</a> <br>'
+'<br><br><br><br><br>';

pages1.push([[]]);
pages1[4][0]='<u><b>List of files to be created today</b></u><br>'
+'      <br><b><u>webpages</u></b><br>'
+'         <a href="./example4.html" target="_blank">example4.html</a>. Its source '
+' code is <a href="./example4.txt" target="_blank"> example4.txt</a> <br>'
+'         <a href="./example3a.html" target="_blank">example3a.html</a>.'
//+' code is <a href="./example3a.txt" target="_blank"> example3a.txt</a> <br>'
+'      <br><br><b><u>CSS files</u></b><br>'
+'         <a href="../styles/myFramework-container.css" target="_blank">myFramework-container.css</a>.<br>'
//+' code is <a href="./example3.css" target="_blank"> example3.css</a> <br>'
+'         <a href="../styles/myFramework-rowColumn.css" target="_blank">myFramework-rowColumn.css.css</a>. '
//+' code is <a href="../styles/myFramework-typography.css" target="_blank"> myFramework-typography.css</a> <br>'
+'<br><br><br><br><br><br>';



$(document).ready(
    function(){
       //addDailyTasks(week1, bypass1);
       addDailyTasks2(week1, bypass1, pages1);
    }
);
