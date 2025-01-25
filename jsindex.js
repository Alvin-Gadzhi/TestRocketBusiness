document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.getElementById('imageCarousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 1000,
        ride: 'carousel'
    });
});