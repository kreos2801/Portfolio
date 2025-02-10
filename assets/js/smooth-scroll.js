document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Empêcher le comportement par défaut du lien

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            // Défilement doux, en ajustant l'offset pour éviter de cacher la section
            window.scrollTo({
                top: targetElement.offsetTop - 110,  // 110px est la hauteur du header
                behavior: "smooth"
            });
        });
    });
});
