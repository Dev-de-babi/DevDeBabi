const animElt = (_target) => {
    anime({
        targets: _target,
        translateY: 10,
        direction: 'alternate',
        loop: true,
        duration: 3800,
        easing: "cubicBezier(0.42, 0, 0.56, 1)"
    });
}
export { animElt }