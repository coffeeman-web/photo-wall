let slideIndex = 1;
let images = document.querySelectorAll('.gallery-item img');
let lightbox = document.getElementById('lightbox');
let lightboxImage = document.getElementById('lightbox-image');

// 初始化事件監聽器
document.addEventListener('DOMContentLoaded', function() {
    images.forEach((img, index) => {
        img.onclick = function(event) {
            openLightbox(index + 1);
        }
    });
});

function openLightbox(index) {
    slideIndex = index;
    showImage(slideIndex);
    lightbox.style.display = 'block';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

function showImage(index) {
    if (index > images.length) { slideIndex = 1 }
    if (index < 1) { slideIndex = images.length }
    lightboxImage.src = images[slideIndex - 1].src;
}

function nextImage() {
    showImage(slideIndex += 1);
}

function prevImage() {
    showImage(slideIndex -= 1);
}


// 讓燈箱在點擊背景時也能關閉
window.onclick = function(event) {
    if (event.target == lightbox) {
        closeLightbox();
    }
}