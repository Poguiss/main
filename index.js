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

function moveCarousel(button, direction) {
    const carousel = button.closest('.carousel');
    const images = carousel.querySelector('.carousel-images');
    const imageWidth = images.querySelector('img').clientWidth;
    const currentTranslate = images.style.transform || 'translateX(0px)';
    let currentX = parseInt(currentTranslate.match(/-?\d+/)[0]);

    currentX += direction * imageWidth;

    const maxTranslate = -(images.childElementCount - 1) * imageWidth;
    if (currentX > 0) currentX = maxTranslate;
    if (currentX < maxTranslate) currentX = 0;

    images.style.transform = `translateX(${currentX}px)`;
}

