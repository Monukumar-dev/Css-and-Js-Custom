
//For Page Loader
$(window).on('load', function() {
    $('.loader').remove();
});


// Loading Button
$('.loading').click(function() {
	$(this).html('<img src="images/loading.gif"/>');
	return false;
}) 


//For Ripple Button
var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});

function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

var rect = this.getBoundingClientRect();
circle.style.left = e.clientX - rect.left -d/2 + 'px';
circle.style.top = e.clientY - rect.top - d/2 + 'px';

    //console.log(this);

    circle.classList.add('ripple');
}

// FOR TOGGLE PASSWORD
$(function () {
$('[data-toggle="password"]').each(function () {
        var input = $(this);
        var eye_btn = $(this).parent().find('.toglepassword');
        eye_btn.css('cursor', 'pointer').addClass('input-password-hide');
        eye_btn.on('click', function () {
            if (eye_btn.hasClass('input-password-hide')) {
                eye_btn.removeClass('input-password-hide').addClass('input-password-show');
                eye_btn.find('.fa').removeClass('fa-eye').addClass('fa-eye-slash')
                input.attr('type', 'text');
            } else {
                eye_btn.removeClass('input-password-show').addClass('input-password-hide');
                eye_btn.find('.fa').removeClass('fa-eye-slash').addClass('fa-eye')
                input.attr('type', 'password');
            }
        });
    });
});


//Header on scroll add Fixed-top class
$(document).ready(function () {
    var search = document.getElementById("navbarteam");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 180) {
            //alert("scroll");
            $('.team-sec-2').addClass('fixed-top slideInDown animated');
        } else {
            $('.team-sec-2').removeClass('fixed-top slideInDown animated');
        }
    });
});
// Header # link ACTIVE Class
$(function(){
    $('#navbarteam ul li a').click(function(){
        $('#navbarteam ul li a.active').removeClass('active');
        $(this).addClass('active');
    });
});
