// Sélectionnez les éléments nécessaires
const hamburgerIcon = document.querySelector('.icon-hamburger');
const closeIcon = document.querySelector('.icon-close');
const overlay = document.querySelector('.overlay');
const mobileMenu = document.querySelector('.mobile-menu');

// Fonction pour afficher le menu mobile et l'overlay
function openMobileMenu() {
    overlay.style.display = 'block';
    mobileMenu.style.display = 'flex';
    hamburgerIcon.style.display = 'none';
    closeIcon.style.display = 'block';
}

// Fonction pour fermer le menu mobile et l'overlay
function closeMobileMenu() {
    overlay.style.display = 'none';
    mobileMenu.style.display = 'none';
    hamburgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
}

// Ajoutez un écouteur d'événements au clic sur l'icône hamburger
hamburgerIcon.addEventListener('click', openMobileMenu);

// Ajoutez un écouteur d'événements au clic sur l'icône close
closeIcon.addEventListener('click', closeMobileMenu);
