// 1. Animation au défilement de la page
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition > sectionTop + sectionHeight / 4) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

// 2. Validation du formulaire avec des messages d'erreur
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche la soumission réelle

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let valid = true;

    // Vérification du nom
    if (name.value.trim() === '') {
        valid = false;
        name.classList.add('error');
        displayErrorMessage(name, 'Ce champ est obligatoire.');
    } else {
        name.classList.remove('error');
    }

    // Vérification de l'email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value.trim())) {
        valid = false;
        email.classList.add('error');
        displayErrorMessage(email, 'Email invalide.');
    } else {
        email.classList.remove('error');
    }

    // Vérification du message
    if (message.value.trim() === '') {
        valid = false;
        message.classList.add('error');
        displayErrorMessage(message, 'Message obligatoire.');
    } else {
        message.classList.remove('error');
    }

    // Si tous les champs sont valides, afficher un message de confirmation
    if (valid) {
        alert("Merci " + name.value + "! Votre message a été envoyé.");
        document.getElementById('contactForm').reset();  // Réinitialise le formulaire
    }
});

// Fonction pour afficher un message d'erreur
function displayErrorMessage(field, message) {
    let errorElement = field.nextElementSibling;
    if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('span');
        errorElement.classList.add('error-message');
        field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
    errorElement.textContent = message;
}

// 3. Changement dynamique de la couleur de fond
document.getElementById('accueil').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor();
});

// Fonction pour générer une couleur aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 4. Effet de survol sur les services
const services = document.querySelectorAll('.service');
services.forEach(function(service) {
    service.addEventListener('mouseenter', function() {
        service.style.transform = 'scale(1.1)';
        service.style.transition = 'transform 0.3s ease';
    });

    service.addEventListener('mouseleave', function() {
        service.style.transform = 'scale(1)';
    });
});
