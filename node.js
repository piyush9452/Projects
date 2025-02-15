document.addEventListener("DOMContentLoaded", () => {
    gsap.to(".hero-title", { opacity: 1, y: -20, duration: 1 });
    gsap.to(".hero-subtitle", { opacity: 1, y: -10, duration: 1, delay: 0.5 });

    document.querySelectorAll(".hero-img").forEach(img => {
        img.addEventListener("mouseenter", () => {
            document.querySelectorAll(".hero-img").forEach(other => {
                if (other !== img) {
                    other.style.filter = "grayscale(100%)";
                }
            });
        });
        img.addEventListener("mouseleave", () => {
            document.querySelectorAll(".hero-img").forEach(other => {
                other.style.filter = "none";
            });
        });
    });
});