let sidebarBtn = document.querySelector(`.navbarXy button`)
let sidebar = document.querySelector(`.sidebar`)

function openSidebar(){
    sidebar.classList.add(`active`);
}

sidebarBtn.addEventListener("click",openSidebar);

let sideicon = document.querySelector(".sideicon")
function closeSidebar(event){
    if(
        event.target.classList.contains("sidebar") ||
        event.target.classList.contains("sideicon") ||
        event.target.classList.contains("bi-x") 
    ){
        sidebar.classList.remove("active");
    }


}
sideicon.addEventListener("click",closeSidebar);
sidebar.addEventListener("click",closeSidebar);

let tablinks  = document.getElementsByClassName("tab-link");
let tabcontents  = document.getElementsByClassName("tab-content");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

    
}
