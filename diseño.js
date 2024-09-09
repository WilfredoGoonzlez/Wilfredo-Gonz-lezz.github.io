// Constructor de la clase App
function App() {}

// Ejecutado cuando la ventana se carga
window.onload = function() {
    var app = new App();
    window.app = app;
}

// Método para manejar el clic en los botones del carrusel
App.prototype.processingButtom = function(event) {
    const btn = event.currentTarget;
    const carouselList = btn.parentNode;
    const track = carouselList.querySelector('#track');
    const carruseel = track.querySelectorAll('.carruseel');

    // Calcular el ancho de cada carrusel
    const carruseelWidth = carruseel[0].offsetWidth;
    const trackWidth = track.scrollWidth; // Total del ancho del track
    const listWidth = carouselList.offsetWidth; // Ancho visible del carrusel

    // Obtener la posición actual del track
    let leftPosition = parseFloat(track.style.left) || 0; // Maneja valores vacíos

    // Determinar qué acción tomar según el botón
    if (btn.dataset.buttom === "buttom-prev") {
        prevAction(leftPosition, carruseelWidth, track);
    } else if (btn.dataset.buttom === "buttom-next") {
        nextAction(leftPosition, trackWidth, listWidth, carruseelWidth, track);
    }
}

// Función para mover el carrusel hacia atrás
let prevAction = (leftPosition, carruseelWidth, track) => {
    // Evitar mover más allá del límite izquierdo
    if (leftPosition < 0) {
        track.style.left = `${Math.min(leftPosition + carruseelWidth, 0)}px`;
    }
}

// Función para mover el carrusel hacia adelante
let nextAction = (leftPosition, trackWidth, listWidth, carruseelWidth, track) => {
    // Evitar mover más allá del límite derecho
    if (Math.abs(leftPosition) < (trackWidth - listWidth)) {
        track.style.left = `${Math.max(leftPosition - carruseelWidth, -(trackWidth - listWidth))}px`;
    }
}
