$(document).ready(function ($) {
    $('#button').click(function () {
        $('.modal__fade').fadeIn();
        return false;
    });

    $('.close__window').click(function () {
        $(this).parents('.modal__fade').fadeOut();
        return false;
    });

    $('.btn__window').click(function () {
        $(this).parents('.modal__fade').fadeOut();
        return false;
    })

    $('.btn__window-registore').click(function () {
        $('.modal__window-authorization').hide();
        $('.modal__window-registrations').fadeIn();
    });
    $('#button').click(function () {
        $('.modal__window-registrations').hide();
        $('.modal__window-authorization').fadeIn();
    });
});

$('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
});


var Options = {
    options: {
        methods: ["card"],
        cardIcons: false,
        fields: false,
        fullScreen: false,
        button: true,
        locales: ["ru"],
        email: true,
        tooltip: false,
        fee: false
    },
    params: {
        token: "479860e4d5013ed0b14eada12ede96ea3a710653",
        amount: 149000,
        currency: 'RUB'
    }
};

fondy("#app", Options);
