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
