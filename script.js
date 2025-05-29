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

// responsive menu
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

menuIcon.addEventListener('click', () => {
    menuList.classList.toggle('hidden');
});


// responsive judul nav
function updateHeading(){
  const h1 = document.getElementById('judul');
  if (window.innerWidth < 1080){
    h1.textContent = 'Sambirenteng';
  }
  else{
    h1.textContent = 'Sambirenteng; Desa Peninggalan Bali Aga';
  }
}

updateHeading();

window.addEventListener('resize', updateHeading);