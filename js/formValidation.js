var contactForm = function () {
    const form = document.querySelector("#contactForm")
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        if ($('#contactForm').length > 0) {
            $("#contactForm").validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    name: "Entrez un nom correcte s'il vous plaît...",
                    email: "Entrez une adresse mail correcte s'il vous plaît...",
                    message: "N'avez vous rien à dire ?"
                },
            });

            if ($("#contactForm").valid()) {
                const envoyer = document.querySelector(".envoyer")
                const wait = document.querySelector(".wait")
                const submitBtn = document.querySelector("#contactForm .btn")
                const toast = document.querySelector("#contactForm .toast")

                envoyer.classList.add("d-none")
                wait.classList.remove("d-none")
                submitBtn.disabled = true

                setTimeout(() => {
                    emailjs.sendForm("service_3l9e0lh", "template_lvmp0oi", form, "08NpTkuFM9KM8__vV")
                    toast.classList.add("show")
                    envoyer.classList.remove("d-none")
                    wait.classList.add("d-none")
                    submitBtn.disabled = false
                    form.reset()

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Vôtre message a bien été envoyer, merci de votre attention ;) !'
                    })
                }, 2000);
            }
        }
    })


};

export { contactForm }