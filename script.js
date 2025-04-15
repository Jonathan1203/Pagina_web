function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');

    // Alterna la clase "open" en el sidebar
    sidebar.classList.toggle('open');

    // Alterna la visibilidad de los botones
    if (sidebar.classList.contains('open')) {
        menuBtn.style.display = 'none'; // Oculta el botón "menu-btn"
        closeBtn.style.display = 'block'; // Muestra el botón "close-btn"
    } else {
        menuBtn.style.display = 'block'; // Muestra el botón "menu-btn"
        closeBtn.style.display = 'none'; // Oculta el botón "close-btn"
    }
}

let currentSlide = 0;

// Función para mostrar un slide específico
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Asegúrate de que el índice esté dentro del rango
    if (index < 0) {
        currentSlide = totalSlides - 1; // Ir al último slide si retrocedes desde el primero
    } else if (index >= totalSlides) {
        currentSlide = 0; // Ir al primer slide si avanzas desde el último
    } else {
        currentSlide = index;
    }

    // Ocultar todos los slides y mostrar solo el actual
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlide) {
            slide.classList.add('active');
        }
    });
}

// Función para mover los slides manualmente
function moveSlide(direction) {
    showSlide(currentSlide + direction);
}

// Desplazamiento automático cada 3 segundos
setInterval(() => {
    moveSlide(1); // Avanza al siguiente slide
}, 3000);

// Inicializa el primer slide
showSlide(currentSlide);

// Abre el modal con la imagen seleccionada
function openModal(imageSrc) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    modal.style.display = 'block';
    modalImage.src = imageSrc; // Establece la imagen seleccionada en el modal
}

// Cierra el modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

// Cierra el modal al hacer clic fuera de la imagen
window.onclick = function (event) {
    const modal = document.getElementById('image-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};