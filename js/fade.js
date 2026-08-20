const TRANSITION_MS = 2000;

function navegarA(pagina) {
    const overlay = document.getElementById('page-transition');

    if (!overlay) {
        window.location.href = pagina + '.html';
        return;
    }

    overlay.classList.add('active');

    setTimeout(() => {
        window.location.href = pagina + '.html';
    }, TRANSITION_MS);
}

window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('page-transition');
    if (!overlay) return;
    
    requestAnimationFrame(() => {
        overlay.classList.remove('active');
    });
});