// Funkcja obsługująca rozwijanie grup
document.querySelectorAll('.group-btn').forEach(button => {
    button.addEventListener('click', () => {
        const subMenu = button.nextElementSibling; // Pobierz podmenu dla danej grupy
        const isVisible = subMenu.style.display === 'block'; // Sprawdź, czy podmenu jest widoczne
        
        // Ukryj wszystkie podmenu
        document.querySelectorAll('.sub-menu').forEach(menu => {
            menu.style.display = 'none';
        });

        // Jeśli podmenu nie było widoczne, rozwiń je
        if (!isVisible) {
            subMenu.style.display = 'block';
        }
    });
});