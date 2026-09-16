
/* PRELOADER */

window.addEventListener("load", function(){

    setTimeout(function(){

        const preloader =
            document.getElementById("preloader");

        preloader.style.opacity = "0";

        preloader.style.transition = "opacity .5s";

        setTimeout(function(){

            preloader.style.display = "none";

        },500);

    },700);

});


/* YEAR */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* SEARCH */

function searchFunction(){

    const query =
        document.getElementById("search").value.trim();

    if(query !== ""){

        window.open(
            "https://www.google.com/search?q=" +
            encodeURIComponent(
                query + " Computer Science study material"
            ),
            "_blank"
        );

    }else{

        alert("Please enter something to search!");

    }

}


/* ENTER KEY SEARCH */

document.getElementById("search")
.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        searchFunction();

    }

});


/* DISABLE RIGHT CLICK */

document.addEventListener(
    "contextmenu",
    function(e){

        e.preventDefault();

    }
    
);

