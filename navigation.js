   //alert(TabList.length); 
   
function setupTabs(myTab, myTabContent){
       var TabList = document.querySelectorAll(myTab);
       TabList.forEach(function (myNode) {
       //alert(myNode.innerHTML);
    
         myNode.addEventListener('click', function (event) {
   
           //alert(myNode.innerHTML);
           TabList.forEach(function (myNode1) {
             myNode1.classList.remove("active");
           });
         
           myNode.classList.add("active");
   
           ContentList = document.querySelectorAll(myTabContent);
         //alert("myTabCont count is " + myTabContent.length);
         
           ContentList.forEach(function (myPane) {
               myPane.classList.remove("active");
              // alert("My Pane class = " + myPane.classList);
           });
           var thisPaneId = myNode.getAttribute("data-bs-target").slice(1);
         //alert("thisPaneId = " + thisPaneId);
           var thisPane   = document.getElementById(thisPaneId);
           thisPane.classList.add('active');
       });
       
     });
   }

