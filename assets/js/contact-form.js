document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitButton = document.getElementById('submit-btn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            submitButton.disabled = true;
            submitButton.classList.add('sending');
            submitButton.textContent = 'Envoi en cours...';
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const templateParams = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            };
            
            emailjs.send('service_sovmh0h', 'template_t163fqa', templateParams, 'RzbTyxKybqGg_Ow9B')
                .then(function(response) {
                    formStatus.textContent = 'Votre message a été envoyé avec succès !';
                    formStatus.className = 'form-status success';
                    
                    contactForm.reset();
                    
                    submitButton.disabled = false;
                    submitButton.classList.remove('sending');
                    submitButton.textContent = 'Envoyer';
                    
                    setTimeout(function() {
                        formStatus.style.display = 'none';
                    }, 5000);
                }, function(error) {
                    formStatus.textContent = 'Une erreur s\'est produite. Veuillez réessayer.';
                    formStatus.className = 'form-status error';
                    
                    submitButton.disabled = false;
                    submitButton.classList.remove('sending');
                    submitButton.textContent = 'Envoyer';
                    
                    console.error('Erreur:', error);
                });
        });
    }
});