import { animElt } from "./js/elementsAnim.js";
import { rippleAnim } from "./js/btn.js"
import { gen } from "./js/bubbleGenerator.js";


// Je déplace légèrement la scroll bar pour régler un petit bug
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.scrollBy(0, 10)
    }, 3000);
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



