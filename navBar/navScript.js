jQuery.noConflict();

jQuery(document).ready(function($) {
    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
        console.log('Toggled class');
    });

    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
    
    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
});



var currentUrl = window.location.pathname;
var homeLink = document.getElementById('home-link');
console.log(currentUrl);
if (currentUrl.includes('/subject')) {
    homeLink.href = '../index.html';
 } else if (currentUrl.includes('/bitFirst')) {
    homeLink.href = '../index.html';
 } else if (currentUrl.includes('/bitSecond')) {
    homeLink.href = '../index.html';
 } else if (currentUrl.includes('/bitThird')) {
    homeLink.href = '../index.html';
 } else if (currentUrl.includes('/bitFourth')) {
    homeLink.href = '../index.html';
 } else if (currentUrl.includes('/bitSixth')) {
    homeLink.href = '../index.html';
 } else if (currentUrl.includes('/bitSeventh')) {
    homeLink.href = '../index.html';
 } else if (currentUrl.includes('/bitEight')) {
    homeLink.href = '../index.html';
 } else {
    homeLink.href = './index.html';
 }
 