
window.addEventListener('load', () => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});

// vedios animations
const videos = document.querySelectorAll('.myVideo');
videos.forEach(video => {

    video.currentTime = 1.58;
    video.addEventListener('mouseover', () => {
        video.currentTime = 0;
        video.play();
    });

    video.addEventListener('mouseout', () => {
        video.currentTime = 1.58;
        video.pause();
    });
});
// nav bar  animation
const buttons = document.querySelectorAll('.sidebar nav ul li a');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.classList.remove('clicked');
        button.classList.add('clicked');
    })
})
// about Us slider 
const leftButton = document.querySelector('.space-left-button');
const rightButton = document.querySelector('.space-right-button');
const gallery = document.querySelector('.space-image-gallery');
const images = document.querySelectorAll('.space-image-gallery img');
let activeIndex = 0;
function updateActiveImage() {
    images.forEach((img, index) => {
        if (index === activeIndex) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}
function scrollRight() {
    activeIndex = (activeIndex + 1) % images.length;
    gallery.scrollBy({ left: 320, behavior: 'smooth' });
    if (activeIndex === 0) {
        setTimeout(() => {
            gallery.scrollBy({ left: -320 * images.length, behavior: 'auto' });
        }, 300);
    }
    updateActiveImage();
}
function scrollLeft() {
    activeIndex = (activeIndex - 1 + images.length) % images.length;
    gallery.scrollBy({ left: -320, behavior: 'smooth' });
    if (activeIndex === images.length - 1) {
        setTimeout(() => {
            gallery.scrollBy({ left: 320 * images.length, behavior: 'auto' });
        }, 300);
    }
    updateActiveImage();
}
rightButton.addEventListener('click', scrollRight);
leftButton.addEventListener('click', scrollLeft);
updateActiveImage(); 
