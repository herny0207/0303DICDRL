function updateTime() {
    const timeElement = document.getElementById('current-time');
    const now = new Date();

    // Format the time as HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update time every second
setInterval(updateTime, 1000);

// Run once on load
updateTime();

// Add some interaction to the stars
document.addEventListener('mousemove', (e) => {
    const stars = document.querySelectorAll('.star');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    stars.forEach(star => {
        const speed = star.classList.contains('star-1') ? 0.05 : 0.03;
        const x = (window.innerWidth - mouseX * speed) / 100;
        const y = (window.innerHeight - mouseY * speed) / 100;
        star.style.transform = `translate(${x}px, ${y}px) rotate(${mouseX / 10}deg)`;
    });
});
