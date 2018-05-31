$(function () {

    $('#contact-form').validate({

        rules: {

            name: {

                required: true,

                minlength: 2

            },

            email: {

                required: true,

                email: true

            },

            message: {

                required: true

            }

        },

        messages: {

            name: {

                required: "come on, you have a name don't you?",

                minlength: "your name must consist of at least 2 characters"

            },

            email: {

                required: "no email, no message"

            },

            message: {

                required: "um...yea, you have to write something to send this form.",

                minlength: "thats all? really?"

            }

        },

        submitHandler: function (form) {

            $(form).ajaxSubmit({

                type: "POST",

                data: $(form).serialize(),

                url: "process.php",

                success: function () {

                    $('#contact-form :input').attr('disabled', 'disabled');

                    $('#contact-form').fadeTo("slow", 0.15, function () {

                        $(this).find(':input').attr('disabled', 'disabled');

                        $(this).find('label').css('cursor', 'default');

                        $('#success').fadeIn();

                    });

                },

                error: function () {

                    $('#contact-form').fadeTo("slow", 0.15, function () {

                        $('#error').fadeIn();

                    });

                }

            });

        }

    });

});

