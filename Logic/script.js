
/* =====================================================
     JAVASCRIPT
===================================================== */



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
   SEARCH
===================================================== */

const searchInput =
document.getElementById("searchInput");

const searchResults =
document.getElementById("searchResults");

const results =
document.getElementById("results");


const searchableElements = [

    "Operating System",
    "Introduction",
    "Types Of Operating System",
    "Functions Of Operating System",
    "Services Of Operating System",
    "UNIX Architecture",
    "Linux Architecture",
    "System Calls",
    "Process Management",
    "Process Concepts",
    "CPU Scheduling",
    "Scheduling Algorithms",
    "IPC",
    "Process Synchronization",
    "Critical Section",
    "Deadlock",
    "Memory Management",
    "Memory Allocation",
    "First Fit",
    "Best Fit",
    "Worst Fit",
    "Paging",
    "Segmentation",
    "Page Replacement",
    "Virtual Memory",
    "I/O System",
    "Mass Storage",
    "Disk Structure",
    "Disk Scheduling",
    "Swap Space",
    "RAID",
    "File Management",
    "File Concepts",
    "Directory Structure",
    "File Sharing",
    "File Protection",
    "File Systems",
    "FCFS",
    "SJF",
    "Round Robin",
    "Priority",
    "Banker's Algorithm",
    "FIFO",
    "LRU",
    "OPTIMAL",
    "SCAN",
    "C-SCAN"

];


searchInput.addEventListener(
"input",
()=>{

    const query =
    searchInput.value
    .toLowerCase()
    .trim();


    if(query === ""){

        searchResults.classList.remove(
            "show"
        );

        return;

    }


    const matches =
    searchableElements.filter(
        item =>
        item.toLowerCase()
        .includes(query)
    );


    results.innerHTML = "";


    if(matches.length === 0){

        results.innerHTML = `
        <div class="search-result">
            <strong>No topic found.</strong>
            <p style="color:var(--muted);font-size:.8rem;">
                Try another keyword.
            </p>
        </div>
        `;

    }else{

        matches.forEach(item=>{

            const div =
            document.createElement("div");

            div.className =
            "search-result";

            div.innerHTML = `
                <strong>${item}</strong>
                <p style="
                color:var(--muted);
                font-size:.75rem;
                margin-top:4px;
                ">
                    Operating System course topic
                </p>
            `;

            results.appendChild(div);

        });

    }


    searchResults.classList.add("show");

});



/* =====================================================
   READING PROGRESS
===================================================== */

window.addEventListener(
"scroll",
()=>{

    const scrollTop =
    window.scrollY;

    const docHeight =
    document.documentElement
    .scrollHeight
    -
    document.documentElement
    .clientHeight;

    const percentage =
    (scrollTop / docHeight) * 100;

    document.getElementById(
        "progressBar"
    ).style.width =
    percentage + "%";

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

