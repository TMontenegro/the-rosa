//Select element funcion
const selectElement = (element) => {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let bodyToggler = selectElement('body');

menuToggler.addEventListener('click', function () {
  bodyToggler.classList.toggle('open');
});
