// 1. Inicializar Iconos de Lucide
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  // Mostrar la vista inicial
  navigateTo("home");
});

// 2. Menú Móvil
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

// 3. Lógica del Modal de Empleos
function openModal(jobTitle) {
  const modalTitle = document.getElementById("modal-job-title");
  const modal = document.getElementById("job-modal");
  const vacanteInput = document.getElementById("form-vacante-input");

  if (modalTitle && modal) {
    modalTitle.innerText = jobTitle;
    if (vacanteInput) {
      vacanteInput.value = jobTitle;
    }
    modal.classList.remove("hidden");
  }
}

function closeModal() {
  const modal = document.getElementById("job-modal");
  if (modal) {
    modal.classList.add("hidden");
  }
}

// Cerrar modal si se hace clic fuera del contenido
window.onclick = function (event) {
  const modal = document.getElementById("job-modal");
  if (event.target == modal) {
    closeModal();
  }
};

// Navegación de vistas dentro de index (muestra/oculta secciones)
function navigateTo(section) {
  const views = document.querySelectorAll('[id^="view-"]');
  views.forEach((v) => v.classList.remove("active-section"));
  views.forEach((v) => v.classList.add("hidden-section"));
  const target = document.getElementById("view-" + section);
  if (target) {
    target.classList.remove("hidden-section");
    target.classList.add("active-section");
  }
  // cerrar menú móvil si está abierto
  const menu = document.getElementById("mobile-menu");
  if (menu && !menu.classList.contains("hidden")) {
    menu.classList.add("hidden");
  }
}
