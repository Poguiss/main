document.addEventListener("DOMContentLoaded", function () {

    var menuToggle = document.getElementById("menuToggle");

    
    var navLinks = document.querySelector(".nav-link");

   
    menuToggle.addEventListener("click", function () {
    
        navLinks.classList.toggle("active");
    });
});

