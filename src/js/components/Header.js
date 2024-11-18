
export function Header() {
    
    // Création de l'élément <header> avec la classe 'header'
    const header = document.createElement('header');
    header.classList.add('header');

    // Création de l'élément <a> pour le logo
    const logoLink = document.createElement('a');
    logoLink.href = '/';
    logoLink.classList.add('logo');

    // Création de l'image du logo
    const logoImage = document.createElement('img');
    logoImage.src = 'src/img/logo.svg';
    logoImage.alt = 'logo';
    logoLink.appendChild(logoImage); // Ajout de l'image au lien du logo

    // Ajout du lien logo au header
    header.appendChild(logoLink);

    // Création de l'élément <nav> avec l'id 'navbar'
    const navbar = document.createElement('nav');
    navbar.id = 'navbar';

    // Création de la liste <ul> pour les éléments de navigation
    const navList = document.createElement('ul');

    // Création des éléments de la liste <li> et des liens <a>
    const navItems = [
        { href: '#Gallery', text: 'Gallery' },
        { href: '#Prices for services', text: 'Prices for services' },
        { href: '#About us', text: 'About us' },
        { href: '#Contact', text: 'Contact' },
    ];

    navItems.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = item.href;
        link.textContent = item.text;
        listItem.appendChild(link);
        navList.appendChild(listItem); // Ajout de chaque <li> au <ul>
    });

    // Ajout de la liste <ul> au <nav>
    navbar.appendChild(navList);

    // Ajout du <nav> au <header>
    header.appendChild(navbar);

    // Retourne le composant header complet
    annimationScroll(header);
    return header;
}

function annimationScroll(header){
    window.addEventListener("scroll", () => {
        if (window.scrollY > header.offsetHeight + 10) {
           header.classList.add('navbar-scrolled');
         } else {
           header.classList.remove('navbar-scrolled');
         }
     });
}
