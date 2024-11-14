export function Navbar() {

  const navbar = document.querySelector('.navbar');
  const header = document.querySelector('.header');
  
  window.addEventListener("scroll", () => {
   if (window.scrollY > header.offsetHeight + 150) {
      header.classList.add('navbar-scrolled');
    } else {
      header.classList.remove('navbar-scrolled');
    }
});

}
