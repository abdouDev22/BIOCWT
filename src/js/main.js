import './../main.scss';
import { initApp } from './app.js';


document.addEventListener('DOMContentLoaded', () => {
  console.log(window.innerWidth);
  initApp();
  detectOverflowingElements();
});
// Fonction pour détecter les éléments causant un scroll horizontal
function detectOverflowingElements() {
  const overflowingElements = []; // Stocke les éléments problématiques
  const bodyWidth = document.body.clientWidth; // Largeur du body visible

  // Parcourir toutes les balises de la page
  document.querySelectorAll("*").forEach(element => {
    const elementWidth = element.getBoundingClientRect().width; // Largeur réelle de l'élément
    const elementLeft = element.getBoundingClientRect().left; // Position de l'élément

    // Si l'élément dépasse la largeur du body
    if (elementWidth + elementLeft > bodyWidth) {
      overflowingElements.push(element.tagName); // Ajouter le nom de la balise
      console.log(`Element ${element.tagName} dépasse avec largeur ${elementWidth}px`);
    }
  });

  // Afficher les résultats
  if (overflowingElements.length > 0) {
    console.log("Les balises qui causent un scroll horizontal :", bodyWidth);
  } else {
    console.log("Aucun élément ne force le défilement horizontal !");
  }
}

// Exécuter la fonction

