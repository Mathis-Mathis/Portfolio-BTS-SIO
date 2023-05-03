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
