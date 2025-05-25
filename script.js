document.querySelectorAll('.selengkapnya-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const card = btn.closest('.card');
        card.classList.toggle('active');
        // Ganti teks tombol jika ingin
        const span = btn.querySelector('span');
        if (span) {
            span.textContent = card.classList.contains('active') ? 'Tutup' : 'Selengkapnya';
        }
    });
});