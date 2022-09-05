import { animElt } from "./js/elementsAnim.js";
import { rippleAnim } from "./js/btn.js";
import { contactForm } from "./js/formValidation.js";

// Vérification des données du formulaire
contactForm()

// Caroussel notre equipe
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
});

// Animation d'une card de la section notre equipe
const roundedBtn = document.querySelectorAll(".btn-rounded")
roundedBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.previousElementSibling.classList.toggle("infosChecked")
        btn.classList.toggle("infosCheckedR")
    })
});

// Mouvement des bulles en arrière plan
// const globalBg = document.querySelector(".global-bg")
// window.addEventListener("scroll", () => {
//     globalBg.style.transform = `translateY(-${window.scrollY - window.scrollY * 70 / 100}px)`
// })

// Je déplace légèrement la scroll bar pour régler un petit bug
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        if (window.scrollY < 5) {
            window.scrollBy(0, 5)
        }
    }, 2000);
})

// Effet wave des boutons
const btns = document.querySelectorAll(".btn")
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        rippleAnim(e)
    })
});

// Petite anime du navbar-toggler (le bouton)
const toggler = document.querySelector(".navbar-toggler")
toggler.addEventListener("click", () => {
    toggler.classList.toggle("trigged")
})

// Scroll reveal anim
window.scrollRev = ScrollReveal({
    reset: false,
    mobile: false
});

// Présentation
scrollRev.reveal('.presentation div div:first-of-type', {
    scale: 0.8,
    distance: "150px",
    viewFactor: 0.5,
    origin: "top"
});
scrollRev.reveal('.presentation div div:last-of-type', {
    scale: 0.8,
    distance: "150px",
    viewFactor: 0.5,
    origin: "top"
});


// Nos jeux
scrollRev.reveal('.nosjeux div div:first-of-type', {
    scale: 0.8,
    distance: "150px",
    viewFactor: 0.3
});
scrollRev.reveal('.nosjeux div div:last-of-type', {
    scale: 0.8,
    distance: "150px",
    viewFactor: 0.3
});

// Animation des boules de présentation
setTimeout(() => {
    animElt(".presentation img:nth-of-type(2)")
}, 800);
setTimeout(() => {
    animElt(".presentation img:nth-of-type(3)")
}, 100);
setTimeout(() => {
    animElt(".presentation img:nth-of-type(4)")
}, 1357);

// Animation des éléments de nos jeux
animElt(".nosjeux img:nth-of-type(2)")
setTimeout(() => {
    animElt(".nosjeux img:nth-of-type(3)")
}, 800);
setTimeout(() => {
    animElt(".nosjeux img:nth-of-type(4)")
}, 1357);
setTimeout(() => {
    animElt(".nosjeux img:nth-of-type(5)")
}, 1950);



