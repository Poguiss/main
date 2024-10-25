document.addEventListener("DOMContentLoaded", function () {

    var menuToggle = document.getElementById("menuToggle");

    
    var navLinks = document.querySelector(".nav-link");

   
    menuToggle.addEventListener("click", function () {
    
        navLinks.classList.toggle("active");
    });
});



const modal = document.getElementById("myModal");
const modalImg = document.getElementById("imgModal");
const closeBtn = document.getElementsByClassName("close")[0];


document.querySelectorAll('.produto img').forEach(img => {
    img.addEventListener('click', function () {
        modal.style.display = "block"; 
        modalImg.src = this.src;     
    });
});


closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
});


modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


