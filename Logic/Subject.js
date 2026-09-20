
/* =====================================================
     JAVASCRIPT
===================================================== */
//=========== Nav Bar Center of Current Page =========

document.addEventListener("DOMContentLoaded",function(){
const subjects = document.querySelectorAll("#subjectNav a");
    const currentPage = window.location.pathname.split("/").pop();
    subjects.forEach(function (subject){
        const subjectPage = subject.getAttribute("href");
    if(subjectPage === currentPage){
        subject.classList.add("active");
        subject.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
            });
        }
    });

});


/* =====================================================
   YEAR
===================================================== */

document.getElementById("year").textContent =
new Date().getFullYear();



/* =====================================================
   ACCORDION
===================================================== */

document.querySelectorAll(".group-head")
.forEach(head=>{

    head.addEventListener("click",()=>{

        const parent =
        head.parentElement;

        parent.classList.toggle("open");

    });

});



/* =====================================================
   MOBILE SIDEBAR
===================================================== */

const sidebarToggle =
document.getElementById("sidebarToggle");

const sidebar =
document.getElementById("sidebar");


sidebarToggle.addEventListener(
"click",
()=>{

    sidebar.classList.toggle("open");

    const icon =
    sidebarToggle.querySelector("i");

    if(sidebar.classList.contains("open")){

        icon.className =
        "fa-solid fa-xmark";

    }else{

        icon.className =
        "fa-solid fa-bars";

    }

});



/* =====================================================
   DARK MODE
===================================================== */

const themeBtn =
document.getElementById("themeBtn");


const savedTheme =
localStorage.getItem("alamOSTheme");


if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}


themeBtn.addEventListener(
"click",
()=>{

    document.body.classList.toggle("dark");

    const dark =
    document.body.classList.contains("dark");


    localStorage.setItem(
        "alamOSTheme",
        dark ? "dark" : "light"
    );


    themeBtn.innerHTML = dark

    ?
    '<i class="fa-solid fa-sun"></i>'

    :
    '<i class="fa-solid fa-moon"></i>';

});



/* =====================================================
   PRINT
===================================================== */

document.getElementById("printBtn")
.addEventListener(
"click",
()=>{

    window.print();

});




/* =====================================================
   BACK TO TOP
===================================================== */

const topBtn =
document.getElementById("topBtn");

window.addEventListener(
"scroll",
()=>{

    if(window.scrollY > 500){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener(
"click",
()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"

    });

});

/* =====================================================
   ACTIVE SIDEBAR LINK
===================================================== */

document.querySelectorAll(
".group-body a"
)
.forEach(link=>{

    link.addEventListener(
    "click",
    ()=>{

        document.querySelectorAll(
        ".group-body a"
        )
        .forEach(a=>
            a.classList.remove("active")
        );


        link.classList.add("active");

    });

});

