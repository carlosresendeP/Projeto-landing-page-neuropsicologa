document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            dots[i].classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                dots[i].classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Loop de volta ao início
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop de volta ao final
        showSlide(currentIndex);
    }

    // Adiciona eventos de clique aos pontos de navegação
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentIndex = parseInt(this.getAttribute('data-index'));
            showSlide(currentIndex);
        });
    });

    // Inicia o carrossel
    showSlide(currentIndex);
    setInterval(nextSlide, 10000); // Muda de slide a cada 5 segundos
});
