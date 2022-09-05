var contactForm = function () {

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
    }
};

export { contactForm }