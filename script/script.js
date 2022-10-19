/*after photo__part slider*/
let offsetplace = 0;
const slider = document.getElementById('images');

document.querySelector('.slider-nextview').addEventListener('click', function(){
    offsetplace = offsetplace + 1275;
    if (offsetplace > 6325) {
        offsetplace = 0;
    }
    console.log(offsetplace)
    slider.style.left = -offsetplace + 'px';
});

document.querySelector('.slider-preview').addEventListener('click', function () {
    offsetplace = offsetplace - 1275;
    if (offsetplace < 0) {
        offsetplace = 5069;
    }
    console.log(offsetplace)
    slider.style.left = -offsetplace + 'px';
});

/*line up slider*/
let offset = 0;
const sliderLine = document.querySelector('.slider__line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 900;
    if (offset > 2650) {
        offset = 0;
    }
    console.log(offset)
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 900;
    if (offset < 0) {
        offset = 1800;
    }
    console.log(offset)
    sliderLine.style.left = -offset + 'px';
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 500) {
        $('.upbtn').css({
            transform: 'scale(1)'
        });
        } else {
        $('.upbtn').css({
            transform: 'scale(0)'
        });
    }
});
$('.upbtn').on('click',function() {
    $('html, body').animate({
        scrollTop: 0
    }, 500);
    return false;
});