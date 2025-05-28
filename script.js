document.querySelectorAll('.wisata-item').forEach(item => {
    const video = item.querySelector('video');
    item.addEventListener('mouseenter', () => video && video.play());
    item.addEventListener('mouseleave', () => {
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    });
});

// animasi 
function revealOnScroll() {
  const reveals = document.querySelectorAll('#sejarah, #kondisi, #tradisi, #wisata');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);