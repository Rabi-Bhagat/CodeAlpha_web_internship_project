
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;
let isZoomed = false;


const allImages = document.querySelectorAll('.gallery .img-w img');
const imageList = Array.from(allImages); 


imageList.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    openLightbox(imageList[currentIndex].src);
  });
});


function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.style.display = 'flex';
  lightboxImg.style.transform = 'scale(1)';
  isZoomed = false;
}


nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % imageList.length;
  openLightbox(imageList[currentIndex].src);
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  openLightbox(imageList[currentIndex].src);
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightboxImg.addEventListener('click', (e) => {
  e.stopPropagation();
  isZoomed = !isZoomed;
  lightboxImg.style.transition = 'transform 0.3s ease';
  lightboxImg.style.transform = isZoomed ? 'scale(1.5)' : 'scale(1)';
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    isZoomed = false;
  }
});

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowLeft') prevBtn.click();
    else if (e.key === 'ArrowRight') nextBtn.click();
    else if (e.key === 'Escape') closeBtn.click();
  }
});
