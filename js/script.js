// Gestion des cœurs sur les cartes restaurants et pages de menus
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionner tous les containers de cœurs (page d'accueil et pages de menus)
    const coeursContainers = document.querySelectorAll('.coeurs-container, .section-menu__coeurs-container');

    coeursContainers.forEach(container => {
        container.addEventListener('click', function(e) {
            // Empêcher la propagation du clic vers le lien de la carte
            e.preventDefault();
            e.stopPropagation();

            // Toggle la classe 'active' pour afficher/masquer le cœur plein
            this.classList.toggle('active');
        });
    });
});
