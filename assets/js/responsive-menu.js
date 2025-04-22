document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); 
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 110, 
                behavior: "smooth"
            });
            
            if (navContainer.classList.contains('active')) {
                navContainer.classList.remove('active');
            }
        });
    });
    
    const menuToggle = document.querySelector('.menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navContainer.classList.toggle('active');
        });
    }
    
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navContainer.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navContainer.classList.contains('active')) {
            navContainer.classList.remove('active');
        }
    });
    
    function updateScrollMargin() {
        const headerHeight = document.querySelector('.main-header').offsetHeight;
        document.querySelectorAll('section').forEach(section => {
            section.style.scrollMarginTop = (headerHeight + 20) + 'px';
        });
    }
    
    updateScrollMargin();
    window.addEventListener('resize', updateScrollMargin);
});