//annimation page accueil

const footer = document.querySelector('footer');
const footerHeight = footer.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  let value = window.scrollY;

  if (value + window.innerHeight < document.documentElement.scrollHeight - footerHeight) {
    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
  }
});


//défilement vers les pages via la navbar

// Sélectionnez l'élément "a" correspondant au lien "about"
const link = document.querySelector('a[href="#about"]');

// Ajoutez un événement "click" à l'élément "a"
link.addEventListener('click', (event) => {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  
  // Récupère la position de la section "about" par rapport au haut de la page
  const aboutSection = document.querySelector('#about');
  const position = aboutSection.offsetTop;

  // Faites défiler la page vers la position de la section "about"
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
});



//boutton pour remonter la page

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})