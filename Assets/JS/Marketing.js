    // Eventos da barra de navegação.
    const toggleNavBtn = document.getElementById("toggleNavBtn");
    const navLinks = document.querySelector(".nav-links");
    const navBar = document.querySelector(".nav-bar");

    toggleNavBtn.addEventListener("click", function () {
        navLinks.classList.toggle("active");
        navBar.classList.toggle("active");
        toggleNavBtn.classList.toggle("change");
    });