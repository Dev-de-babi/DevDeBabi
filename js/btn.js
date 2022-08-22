const rippleAnim = (e) => {
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop

    let ripple = document.createElement("span")
    ripple.style.left = x + "px"
    ripple.style.top = y + "px"

    e.target.appendChild(ripple)
    setTimeout(() => {
        ripple.remove()
    }, 10000);

}

export { rippleAnim }