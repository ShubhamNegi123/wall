
$(document).ready(function () {
    clintOwlCarousel();
    portfolioOwlCarousel();
    navBar();
    formNameValidation();
    formEmailValidation();
    formSubjectValidation();
    formMessageValidation();
    submitForm()
    // moveStick();
    aboutClick();
    serviceClick();
    testimonialsClick();
    clintsClick();
    portfolioClick();
    contactClick();
    navContentClick();
    var submit = false;


    navContentClick();
// function for navigation bar content click
function navContentClick(){
   var width = $(window).width();
   console.log(width);
   if(width <= 768){
       $('nav ul li a').click(function(){
         $('nav').slideUp();
       });
   }
}






// function for about button click
    function aboutClick(){       
        $("#nav-about").click(function() {
            $('html, body').animate({
                scrollTop: $(".about").offset().top - 210               
            }, 500);
        });
    }
    // function for service button click
    function serviceClick(){       
        $("#nav-service").click(function() {
            $('html, body').animate({
                scrollTop: $(".services").offset().top - 160             
            }, 500);
        });
    }
    // function for testimonial button click
    function testimonialsClick(){       
        $("#nav-testimonials").click(function() {
            $('html, body').animate({
                scrollTop: $(".testimonials").offset().top - 211
              
            }, 500);            
        });
    }
    // function for clint button click
    function clintsClick(){       
        $("#nav-clints").click(function() {
            $('html, body').animate({
                scrollTop: $(".clints").offset().top - 158            
            }, 500);            
        });
    }
    // function for portfolio button click
    function portfolioClick(){       
        $("#nav-portfolio").click(function() {
            $('html, body').animate({
                scrollTop: $(".portfolio").offset().top - 160            
            }, 500);            
        });
    }
    // function for contact button click
    function contactClick(){       
        $("#nav-contact").click(function() {
            $('html, body').animate({
                scrollTop: $("#footer").offset().top - 155           
            }, 500);            
        });
    }

    

    

    function submitForm() {
        if (submit) {
            $('#submit').click(function () {
                $('#submit').submit();
            });
        } else {
            // alert('please enter valid form data');
        }
    }


    // form name validation
    function formNameValidation() {

        $('#name').blur(function () {
            var name = $('#name').val();        
            if (name == '') {
                $('.name-error').text('name can not be empty');
                $('.name-error').show();
                submit = false;
            } else {
                $('.name-error').hide();
                submit = true;
            }
        });
    }
    // form email validation
    function formEmailValidation() {
        $('#email').blur(function () {
            var name = $('#email').val();
            var regx = /^([a-zA-Z 0-9\.-]+)@([a-zA-Z]{2,8})(.[a-zA-Z]{2,8})?$/;
            if (regx.test(name)) {
                $('.email-error').hide();
                submit = true;
            } else if (name == '') {
                $('.email-error').text('email can not be empty');
                $('.email-error').show();
                submit = false;
            } else {
                $('.email-error').text('please enter a vaalid email adress');
                $('.email-error').show();
                submit = false;
            }
        });
    }
    // subject name validation
    function formSubjectValidation() {
        $('#subject').blur(function () {
            var name = $('#subject').val();
            if (name == '') {
                $('.subject-error').text('subject can not be empty');
                $('.subject-error').show();
                submit = false;
            } else {
                $('.subject-error').hide();
                submit = true;
            }
        });
    }
    // message name validation
    function formMessageValidation() {
        $('#message').blur(function () {
            var name = $('#message').val();
            if (name == '') {
                $('.message-error').text('message can not be empty');
                $('.message-error').show();
                submit = false;
            } else {
                $('.message-error').hide();
                submit = true;
            }
        });
    }
    // function for nav bar button
    function navBar() {
        $('.nav-button').click(function () {
            $('header ul').css({
                'flex-direction': 'column',
                'text-align': 'center'
            });
            $('header ul li').css({
                'margin-bottom': '10px'
            });
            // $('.home-section').css({
            //     'padding-top': '400px'    
            // });
            $('nav').slideToggle();
        });
    }


    // function for portfolio slider
    function portfolioOwlCarousel() {
        $('.portfolio .portfolio-logo-images').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 3000,
            slideTransition: 'linear',
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }
    // function for clints slider
    function clintOwlCarousel() {
        $('.clints .clints-logo-images').owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplaySpeed: 3000,
            slideTransition: 'linear',
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });
    }

});


