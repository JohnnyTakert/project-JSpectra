function typeEffect(element, speed = 150) {
    const titleText = element.textContent;
    element.textContent = '';
    let i = 0;
    
    function typeText() {
    if (i < titleText.length) {
    element.textContent += titleText[i];
    i++;
    setTimeout(typeText, speed);
    }}
    
    typeText();
    }
    
    document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero-title');
    typeEffect(title, 100);
    });
