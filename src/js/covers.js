document.addEventListener("DOMContentLoaded", function () {
    const coversSection = document.querySelector(".covers-section");
    const marqueeLines = document.querySelectorAll(".covers-marquee-line");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    }

    function startAnimation() {
        if (isInViewport(coversSection)) {
            marqueeLines.forEach(line => {
                line.style.animationPlayState = "running";
            });
        } else {
            marqueeLines.forEach(line => {
                line.style.animationPlayState = "paused";
            });
        }
    }

    window.addEventListener("scroll", startAnimation);
    startAnimation();
});
