document.addEventListener("DOMContentLoaded", function () {

    var menuToggle = document.getElementById("menuToggle");

    
    var navLinks = document.querySelector(".nav-link");

   
    menuToggle.addEventListener("click", function () {
    
        navLinks.classList.toggle("active");
    });
});







document.querySelectorAll('.produto img').forEach(img => {
    img.addEventListener('click', function () {
        const modal = document.getElementById("myModal");
const modalImg = document.getElementById("imgModal");
        modal.style.display = "block"; 
        modalImg.src = this.src;     
    });
});

const closeBtn = document.querySelector("#closeBtn");
closeBtn.addEventListener('click', function () {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
});

const modal = document.getElementById("myModal");
modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


