// 1. Inicializar Iconos de Lucide
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

// 2. Navegación SPA (Sin recargar)
function navigateTo(viewId) {
    // Ocultar todas las secciones
    document.querySelectorAll('div[id^="view-"]').forEach(el => {
        el.classList.add('hidden-section');
        el.classList.remove('active-section');
    });
    
    // Mostrar la deseada
    const target = document.getElementById('view-' + viewId);
    if(target) {
        target.classList.remove('hidden-section');
        target.classList.add('active-section');
        
        // CORRECCIÓN: Scroll inmediato al inicio de la página (0, 0)
        // Usamos instantáneo en lugar de 'smooth' para asegurar que la nueva vista empiece desde el header
        window.scrollTo(0, 0);
    }
    
    // Cerrar menú móvil si está abierto
    document.getElementById('mobile-menu').classList.add('hidden');
}

// 3. Menú Móvil
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// 4. Lógica del Modal de Empleos
function openModal(jobTitle) {
    const modalTitle = document.getElementById('modal-job-title');
    const modal = document.getElementById('job-modal');
    
    if(modalTitle && modal) {
        modalTitle.innerText = jobTitle;
        modal.classList.remove('hidden');
    }
}

function closeModal() {
    const modal = document.getElementById('job-modal');
    if(modal) {
        modal.classList.add('hidden');
    }
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('job-modal');
    if (event.target == modal) {
        closeModal();
    }
}