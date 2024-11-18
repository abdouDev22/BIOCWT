import { Home } from './views/Home.js';

export function router() {
    const app = document.getElementById('app');
    app.innerHTML = ''; // Réinitialise le contenu

    const hash = window.location.hash;

    switch (hash) {
        case '#about':
            app.appendChild(About());
            break;
        case '#home':
            app.appendChild(Home());
        default:
            app.appendChild(Home());
            break;
    }
}