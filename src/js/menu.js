(() => {
  const refs = {
    openMenuBtn: document.querySelector('.tel-menu-open'),
    closeMenuBtn: document.querySelector('.tel-menu-close'),
    closeMenuBtn1: document.querySelector('.link1'),
    closeMenuBtn2: document.querySelector('.link2'),
    closeMenuBtn3: document.querySelector('.link3'),
    closeMenuBtn4: document.querySelector('.link4'),
    closeMenuBtn5: document.querySelector('.link5'),
    menu: document.querySelector('.tel-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn1.addEventListener('click', toggleMenu);
  refs.closeMenuBtn2.addEventListener('click', toggleMenu);
  refs.closeMenuBtn3.addEventListener('click', toggleMenu);
  refs.closeMenuBtn4.addEventListener('click', toggleMenu);
  refs.closeMenuBtn5.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden-menu');
    refs.body.classList.toggle('no-scroll');
  }
})();

//Skroll
// Найти все ссылки начинающиеся на #
const anchors = document.querySelectorAll('a[href^="#"]');

// Цикл по всем ссылкам
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)

    const goto = anchor.hasAttribute('href')
      ? anchor.getAttribute('href')
      : 'body';
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
