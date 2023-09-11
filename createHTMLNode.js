function myTabs(id){
    let myTabStr='<!-- Nav tabs -->'
    +'<ul class="nav nav-tabs" id="myTab'+id+'">'
    +'<li class="nav-item">'
    +'  <button class="nav-link active" id="home-tab" data-bs-target="#home'+ id +'" type="button">Bypasss</button>'
    +'</li>'
    +'<li class="nav-item">'
    +'  <button class="nav-link" id="profile-tab"  data-bs-target="#profile' + id + '" type="button">Your CSS Framework</button>'
    +'</li>'
    +'</ul>';

    return myTabStr;
}

function addDailyTasks(currentWeek, shortVersion){
    //alert(currentWeek.length);
    var weekday = document.getElementById("weekday");
    let dayid=1;
    const days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    currentWeek.forEach(function(day, index){
        let L1Node = document.createElement("div");
        if (dayid==1)
            L1Node.className="bg-light active";
        else
            L1Node.className="bg-light collapse p-2";
        L1Node.id="section" + dayid;
        L1Node.innerHTML= '<!-- Nav tabs -->'
            +'<ul class="nav nav-tabs" id="myTab'+dayid+'">'
            +'      <li class="nav-item">'
            +'          <button class="nav-link active" id="home-tab" data-bs-target="#home'+ dayid +'" type="button">Bypasss</button>'
            +'      </li>'
            +'      <li class="nav-item">'
            +'          <button class="nav-link" id="profile-tab"  data-bs-target="#profile' + dayid + '" type="button">Your CSS Framework</button>'
            +'      </li>'
            +'</ul>';


        let tabContentNode = document.createElement("div");
        tabContentNode.className = "tab-content";
        tabContentNode.id="myTabContent"+dayid;
      /*  
        let htext = "<h3>"+days[id]+"</h3>"
        +'<!-- Tab panes -->'
        +'<div class="tab-content">'
        +'<div class="active" id="home'+id+'">'
        +'AAAA'
        +'</div>'
        +'<div class="tab-pane" id="profile'+id+'">'
        +'BBBB'
        +'</div>';
        tabContentNode.innerHTML=htext;
        */
        
        let tabPaneOne = document.createElement("div");
        tabPaneOne.className="active";
        tabPaneOne.id="home"+dayid;
        let htext1 = "<h3>"+days[dayid-1]+"</h3>";

        shortVersion[index].forEach(function(task){
             htext1+=task;
        });

        tabPaneOne.innerHTML=htext1;
        tabContentNode.appendChild(tabPaneOne);

        let tabPane2 = document.createElement("div");
        tabPane2.className="tab-pane bg-warning";
        tabPane2.id="profile"+dayid;
        let htext2="<h3>"+days[dayid-1]+"</h3>";
        //htext2+=day[0];
        
        day.forEach(function(task){
            htext2+=task;
        });
        
        tabPane2.innerHTML=htext2;
        tabContentNode.appendChild(tabPane2);


        L1Node.appendChild(tabContentNode);

        weekday.appendChild(L1Node);
        tabToggle(dayid);
        dayid++;
    });
}



function tabToggle(dayid){
    var mytabid = "#myTab"+dayid;
    var TabList = document.querySelectorAll(mytabid+' button');
    //alert(TabList.length); 
    
    TabList.forEach(function (myNode) {
        myNode.addEventListener('click', function (event) {
            TabList.forEach(function (myNode1) {
                myNode1.classList.remove("active");
            });
      
            myNode.classList.add("active");

            var myTabConentId = "#myTabContent"+dayid;
            var myTabContent = document.querySelectorAll(myTabConentId+' div');
            //alert("myTabCont count is " + myTabContent.length);
      
            myTabContent.forEach(function (myPane) {
            //    alert("My Pane class = " + myPane.className);
                myPane.classList.remove("active");
                myPane.classList.add("tab-pane");//.remove("active");
            });
            var thisPaneId = myNode.getAttribute("data-bs-target").slice(1);
            //alert("thisPaneId = " + thisPaneId);
            var thisPane   = document.getElementById(thisPaneId);
            
            thisPane.classList.add("active");
            //if(thisPaneId=="profile"+dayid);
            //    thisPane.classList.add("bg-warning");
        });    
    });
}


function myTabs2(id){
    let myTabStr='<!-- Nav tabs -->'
    +'<ul class="nav nav-tabs" id="myTab'+id+'">'
    +'<li class="nav-item">'
    +'  <button class="nav-link active" id="page-tab" data-bs-target="#page'+ id +'" type="button">Daily Pages</button>'
    +'</li>'
    +'<li class="nav-item">'
    +'  <button class="nav-link" id="home-tab" data-bs-target="#home'+ id +'" type="button">Bypasss</button>'
    +'</li>'
    +'<li class="nav-item">'
    +'  <button class="nav-link" id="profile-tab"  data-bs-target="#profile' + id + '" type="button">Your CSS Framework</button>'
    +'</li>'
    +'</ul>';

    return myTabStr;
}


function addDailyTasks2(currentWeek, shortVersion, dailyPages){
    //alert(currentWeek.length);
    var weekday = document.getElementById("weekday");
    let dayid=1;
    const days=["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    currentWeek.forEach(function(day, index){
        let L1Node = document.createElement("div");
        if (dayid==1)
            L1Node.className="bg-light active";
        else
            L1Node.className="bg-light collapse p-2";
        L1Node.id="section" + dayid;
        L1Node.innerHTML= '<!-- Nav tabs -->'
            +'<ul class="nav nav-tabs" id="myTab'+dayid+'">'
            +'      <li class="nav-item">'
            +'          <button class="nav-link active" id="page-tab"  data-bs-target="#page' + dayid + '" type="button">Daily pages</button>'
            +'      </li>'
            +'      <li class="nav-item">'
            +'          <button class="nav-link" id="home-tab" data-bs-target="#home'+ dayid +'" type="button">Bypasss</button>'
            +'      </li>'
            +'      <li class="nav-item">'
            +'          <button class="nav-link" id="profile-tab"  data-bs-target="#profile' + dayid + '" type="button">Your CSS Framework</button>'
            +'      </li>'
            +'</ul>';


        let tabContentNode = document.createElement("div");
        tabContentNode.className = "tab-content";
        tabContentNode.id="myTabContent"+dayid;
      /*  
        let htext = "<h3>"+days[id]+"</h3>"
        +'<!-- Tab panes -->'
        +'<div class="tab-content">'
        +'<div class="active" id="home'+id+'">'
        +'AAAA'
        +'</div>'
        +'<div class="tab-pane" id="profile'+id+'">'
        +'BBBB'
        +'</div>';
        tabContentNode.innerHTML=htext;
        */

        let tabPaneZero = document.createElement("div");
        tabPaneZero.className="active";
        tabPaneZero.id="page"+dayid;
        let htext0 = "<h3>"+days[dayid-1]+"</h3>";

        dailyPages[index].forEach(function(task){
             htext0+=task;
        });
        tabPaneZero.innerHTML=htext0;
        tabContentNode.appendChild(tabPaneZero);



        let tabPaneOne = document.createElement("div"); 
        tabPaneOne.className="tab-pane";
        tabPaneOne.id="home"+dayid;
        let htext1 = "<h3>"+days[dayid-1]+"</h3>";

        shortVersion[index].forEach(function(task){
             htext1+=task;
        });

        tabPaneOne.innerHTML=htext1;
        tabContentNode.appendChild(tabPaneOne);

        let tabPane2 = document.createElement("div");
        tabPane2.className="tab-pane bg-warning";
        tabPane2.id="profile"+dayid;
        let htext2="<h3>"+days[dayid-1]+"</h3>";
        //htext2+=day[0];
        
        day.forEach(function(task){
            htext2+=task;
        });
        
        tabPane2.innerHTML=htext2;
        tabContentNode.appendChild(tabPane2);


        L1Node.appendChild(tabContentNode);

        weekday.appendChild(L1Node);
        tabToggle2(dayid);
        dayid++;
    });
}


function tabToggle2(dayid){
    var mytabid = "#myTab"+dayid;
    var TabList = document.querySelectorAll(mytabid+' button');
    //alert(TabList.length); 
    
    TabList.forEach(function (myNode) {
        myNode.addEventListener('click', function (event) {
            TabList.forEach(function (myNode1) {
                myNode1.classList.remove("active");
            });
      
            myNode.classList.add("active");

            var myTabConentId = "#myTabContent"+dayid;
            var myTabContent = document.querySelectorAll(myTabConentId+' div');
            //alert("myTabCont count is " + myTabContent.length);
      
            myTabContent.forEach(function (myPane) {
            //    alert("My Pane class = " + myPane.className);
                myPane.classList.remove("active");
                myPane.classList.add("tab-pane");//.remove("active");
            });
            var thisPaneId = myNode.getAttribute("data-bs-target").slice(1);
            //alert("thisPaneId = " + thisPaneId);
            var thisPane   = document.getElementById(thisPaneId);
            
            thisPane.classList.add("active");
            //if(thisPaneId=="profile"+dayid);
            //    thisPane.classList.add("bg-warning");
        });    
    });
}



/*
$(document).ready(
    function(){
       addDailyTasks(week1, bypass1);
    }
);
*/