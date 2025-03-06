
/*hero*/

const scrollhero100 = ScrollReveal().reveal('.h1hero-reveal',{
    origin: 'top', 
    distance: '50px', // Distância do movimento
    duration: 1000, // Duração da animação em milissegundos
    delay: 300, // Delay entre as animações
    reset: false // Não reseta a animação quando o elemento sai da tela
})
const scrollhero300 = ScrollReveal().reveal('.phero-reveal',{
    origin: 'bottom', 
    distance: '50px', // Distância do movimento
    duration: 1000, // Duração da animação em milissegundos
    delay: 300, // Delay entre as animações
    reset: false // Não reseta a animação quando o elemento sai da tela
})
const btn = document.querySelectorAll('.btn');
btn.forEach((item, index) => {
    ScrollReveal().reveal(item, {
        origin: 'botton',
        distance: '50px',
        duration: 1000,
        delay: index * 200, // Delay de 100ms por item
        reset: false
    });
});

const scrollhero500 = ScrollReveal().reveal('.carouselhero-reveal',{
    origin: 'top', 
    distance: '50px', // Distância do movimento
    duration: 1000, // Duração da animação em milissegundos
    delay: 500, // Delay entre as animações
    reset: false // Não reseta a animação quando o elemento sai da tela
})


const scrollDown200 = ScrollReveal().reveal('.section-title',{
    origin: 'top', 
    distance: '50px', // Distância do movimento
    duration: 1000, // Duração da animação em milissegundos
    delay: 200, // Delay entre as animações
    reset: false // Não reseta a animação quando o elemento sai da tela
})

const scrollleft300 = ScrollReveal().reveal('.about-text h2',{
    origin: 'left', 
    distance: '50px', // Distância do movimento
    duration: 1000, // Duração da animação em milissegundos
    delay: 300, // Delay entre as animações
    reset: false // Não reseta a animação quando o elemento sai da tela
})

const scrollDown500 = ScrollReveal().reveal('.about-text p',{
    origin: 'left', 
    distance: '50px', // Distância do movimento
    duration: 1000, // Duração da animação em milissegundos
    delay: 500, // Delay entre as animações
    reset: false // Não reseta a animação quando o elemento sai da tela
})
const scrollleft500 = ScrollReveal().reveal('.about-img',{
    origin: 'left', 
    distance: '50px', // Distância do movimento
    duration: 1000, // Duração da animação em milissegundos
    delay: 500, // Delay entre as animações
    reset:true
})

const h4400 = ScrollReveal().reveal('.neuropsychological-texts h4',{
    origin: 'left', 
    distance: '50px',
    duration: 1000, 
    delay: 400, 
    reset: false 

})

const itemsCard = document.querySelectorAll('.services-grid .service-card');
itemsCard.forEach((item, index) => {
    ScrollReveal().reveal(item, {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: index * 200, // Delay de 100ms por item
        reset: true
    });
});


const paragraphRight = document.querySelectorAll('.paragraph-right');
paragraphRight.forEach((item, index) => {
    ScrollReveal().reveal(item, {
        origin: 'right', 
        distance: '50px',
        duration: 1000, 
        delay: 400, 
        reset: false 
    });
});

const paragraphLeft = document.querySelectorAll('.paragraph');
paragraphLeft.forEach((item, index) => {
    ScrollReveal().reveal(item, {
        origin: 'left', 
        distance: '50px',
        duration: 1000, 
        delay: 400, 
        reset: false 
    });
});

const paragraphTop = document.querySelectorAll('.paragraph-top');
paragraphTop.forEach((item, index) => {
    ScrollReveal().reveal(item, {
        origin: 'top', 
        distance: '50px',
        duration: 1000, 
        delay: index * 200, 
        reset: true 
    });
});

const contactItem = document.querySelectorAll('.contact-item');
contactItem.forEach((item, index) => {
    ScrollReveal().reveal(item, {
        origin: 'top', 
        distance: '50px',
        duration: 1000, 
        delay: index * 200, 
        reset: true 
    });
});





const items = document.querySelectorAll('.right-texts li');
items.forEach((item, index) => {
    ScrollReveal().reveal(item, {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: index * 100, // Delay de 100ms por item
        reset: false
    });
});

const socialLinks = document.querySelectorAll('.social-links a');
items.forEach((item, index) => {
    ScrollReveal().reveal(item, {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: index * 100, // Delay de 100ms por item
        reset: false
    });
});