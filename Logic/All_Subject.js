/* =====================================================
   YEAR
===================================================== */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =====================================================
   SUBJECT COUNT
===================================================== */

const cards =
    document.querySelectorAll(".subject-card");

document.getElementById("subjectCount").textContent =
    cards.length;



/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const nav =
    document.getElementById("nav");


menuBtn.addEventListener("click",()=>{

    nav.classList.toggle("open");

    const icon =
        menuBtn.querySelector("i");

    if(nav.classList.contains("open")){

        icon.className =
            "fa-solid fa-xmark";

    }else{

        icon.className =
            "fa-solid fa-bars";

    }

});


/* close mobile menu */

document.querySelectorAll(".nav a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("open");

        menuBtn.querySelector("i")
        .className =
        "fa-solid fa-bars";

    });

});



/* =====================================================
   DARK MODE
===================================================== */

const themeBtn =
    document.getElementById("themeBtn");


const savedTheme =
    localStorage.getItem("alamTheme");


if(savedTheme === "dark"){

    document.body.classList.add("dark");

    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "alamTheme",
        dark ? "dark" : "light"
    );


    themeBtn.innerHTML = dark

        ? '<i class="fa-solid fa-sun"></i>'

        : '<i class="fa-solid fa-moon"></i>';

});



/* =====================================================
   SEARCH + SEMESTER FILTER
   DESKTOP + MOBILE FIX
===================================================== */

const search = document.getElementById("search");

const searchBtn = document.getElementById("searchBtn");

const filters = document.querySelectorAll(".filter");

const noResult = document.getElementById("noResult");

const subjectCards = document.querySelectorAll(".subject-card");

let selectedSemester = "all";


/* SEARCH AND FILTER FUNCTION */

function filterSubjects() {

    const query = search.value
        .toLowerCase()
        .trim();

    let visible = 0;

    subjectCards.forEach(card => {

        // Subject name
        const name = (
            card.dataset.name ||
            card.querySelector("h3")?.textContent ||
            ""
        ).toLowerCase();

        // Semester
        const semester = card.dataset.sem || "";

        // Search matching
        const matchesSearch = name.includes(query);

        // Semester matching
        const matchesSemester =
            selectedSemester === "all" ||
            semester === selectedSemester;

        // Show or hide subject
        if (matchesSearch && matchesSemester) {

            card.classList.remove("hidden");

            visible++;

        } else {

            card.classList.add("hidden");

        }

    });


    // No result message
    if (noResult) {

        noResult.style.display =
            visible === 0 ? "block" : "none";

    }

}


/* SEARCH WHILE TYPING */

search.addEventListener("input", filterSubjects);


/* SEARCH BUTTON CLICK */

searchBtn.addEventListener("click", filterSubjects);


/* SEARCH ON ENTER KEY */

search.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        event.preventDefault();

        filterSubjects();

    }

});


/* SEMESTER FILTER */

filters.forEach(button => {

    button.addEventListener("click", function() {

        // Update active button
        filters.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Update selected semester
        selectedSemester = button.dataset.sem;

        // Apply search + semester filter
        filterSubjects();

    });

});

/* =====================================================
   BOOKMARK
===================================================== */

document.querySelectorAll(".bookmark")
.forEach(button=>{

    button.addEventListener("click",()=>{

        const icon =
            button.querySelector("i");


        if(
            icon.classList.contains(
                "fa-regular"
            )
        ){

            icon.classList.remove(
                "fa-regular"
            );

            icon.classList.add(
                "fa-solid"
            );

            button.style.color =
                "#6366f1";

        }else{

            icon.classList.remove(
                "fa-solid"
            );

            icon.classList.add(
                "fa-regular"
            );

            button.style.color =
                "";

        }

    });

});



/* =====================================================
   SCROLL REVEAL
===================================================== */

const reveals =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        entries=>{

            entries.forEach(entry=>{

                if(entry.isIntersecting){

                    entry.target
                    .classList.add("show");

                }

            });

        },
        {
            threshold:.12
        }
    );


reveals.forEach(
    element =>
    observer.observe(element)
);



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

    }
);


topBtn.addEventListener(
    "click",
    ()=>{

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }
);



/* =====================================================
   DISABLE RIGHT CLICK
===================================================== */

document.addEventListener(
    "contextmenu",
    e => e.preventDefault()
);
