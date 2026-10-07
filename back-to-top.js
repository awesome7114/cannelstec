const backToTop = document.querySelector(".back-to-top");

backToTop?.addEventListener("click", (event) => {
    event.preventDefault();

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
    }

    const startPosition = window.scrollY;
    const duration = 1400;
    let startTime;

    function animateScroll(timestamp) {
        startTime ??= timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        window.scrollTo({
            top: startPosition * (1 - easedProgress),
            behavior: "instant"
        });

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        }
    }

    requestAnimationFrame(animateScroll);
});