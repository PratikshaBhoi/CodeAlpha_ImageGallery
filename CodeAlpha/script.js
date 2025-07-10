    const images = Array.from(document.querySelectorAll('.gallery img'));
    let currentIndex = 0;

    images.forEach((img, index) => {
      img.addEventListener('click', () => {
        currentIndex = index;
        openLightbox(img.src);
      });
    });

    function openLightbox(src) {
      document.getElementById('lightbox-img').src = src;
      document.getElementById('lightbox').style.display = 'flex';
    }

    function closeLightbox() {
      document.getElementById('lightbox').style.display = 'none';
    }

    function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex < 0) currentIndex = images.length - 1;
      if (currentIndex >= images.length) currentIndex = 0;
      document.getElementById('lightbox-img').src = images[currentIndex].src;
    }

    function filterImages(category) {
      images.forEach(img => {
        if (category === 'all' || img.dataset.category === category) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    }
  