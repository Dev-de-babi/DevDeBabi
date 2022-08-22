
const gen = (container) => {
    // Calcul des attributs d'une bulle
    let HL = Math.floor(Math.random() * 200 - 100) + 100; // hauteur et largeur en px
    let D = Math.floor(Math.random() * 100); // distance par rapport au haut de l'écran en vh
    let C = Math.floor(Math.random() * 3) + 1; // Nombre aléatoire pour choisir la couleur
    switch (C) {
        case 1:
            C = "./assets/img/BLANC.png"
            break;
        case 2:
            C = "./assets/img/ORANGE.png"
            break;
        case 3:
            C = "./assets/img/VERT.png"
            break;
    }

    const bubble = document.createElement("img")
    bubble.classList.add("bubble")
    bubble.style.width = HL + "px"
    bubble.style.height = HL + "px"
    bubble.src = C // C contient la source de l'image
    bubble.style.top = D + "vh"
    container.appendChild(bubble)
    setTimeout(() => {
        bubble.remove()
    }, 55000);
}

export { gen }