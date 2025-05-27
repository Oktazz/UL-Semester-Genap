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