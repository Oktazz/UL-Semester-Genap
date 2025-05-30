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

// animasi scroll
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
  if (window.innerWidth <= 1080){
    h1.textContent = 'Sambirenteng';
  }
  else{
    h1.textContent = 'Sambirenteng; Desa Peninggalan Bali Aga';
  }
}

updateHeading();

window.addEventListener('resize', updateHeading);

// navbar active state
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});


// pemilihan bahasa
function showLanguagePopup() {
  document.getElementById('language-selector').style.display = 'flex';
  document.body.classList.add('no-scroll'); // mencegah scroll
}

function goToLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang); // simpan pilihan bahasa
  if (lang === 'id') {
    window.location.href = 'index.html';
  } else if (lang === 'en') {
    window.location.href = 'index-en.html';
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const selectedLang = localStorage.getItem('selectedLanguage');
  if (selectedLang) {
    document.getElementById('language-selector').style.display = 'none';
    document.body.classList.remove('no-scroll');
  } else {
    document.getElementById('language-selector').style.display = 'flex';
    document.body.classList.add('no-scroll');
  }
});