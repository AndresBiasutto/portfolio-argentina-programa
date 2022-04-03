const navBarUp = document.getElementById("nav");
const navBarDown = document.getElementById("menu");
const hero = document.getElementById("hero");
const secSkills = document.getElementById("skills");
const barraHtml = document.querySelector(".progress-bar-html");
const barraCss = document.querySelector(".progress-bar-css");
const barraJs = document.querySelector(".progress-bar-js");
const barraSql = document.querySelector(".progress-bar-sql");
const barraAngular = document.querySelector(".progress-bar-angular");
const barraJava = document.querySelector(".progress-bar-java");
const barraLectura = document.querySelector(".lectura");
const barraHabla = document.querySelector(".habla");
const barraEscritura = document.querySelector(".escritura");
const noInsta = document.querySelector(".no-insta");
const menuHam = document.querySelector(".menu-ham");
const menuBotones = document.querySelector(".menu__barra-botones");
const menuToogle = document.querySelector(".menu-ham-toogle");

//Animación de las barras de skills
const skillsBarAnim = () => {
  const distanciaHastaSkills = secSkills.getBoundingClientRect().top;

  const barras = [
    barraHtml,
    barraCss,
    barraJs,
    barraSql,
    barraAngular,
    barraJava,
    barraLectura,
    barraHabla,
    barraEscritura,
  ];

  if (distanciaHastaSkills < 100) {
    console.log("soy menos que 0");
    for (let i = 0; i < barras.length; i++) {
      barras[i].style.animationPlayState = "running";
    }
  }
};
//Animacion del fondo de las nav-bar
const navBarAnim = () => {
  const heroBottom = hero.getBoundingClientRect().bottom;
  if (heroBottom < 10) {
    navBarUp.style.transition = "1s all ease";
    navBarDown.style.transition = "1s all ease";
    navBarUp.style.backgroundColor = "var(--oscuro)";
    navBarDown.style.backgroundColor = "var(--oscuro)";
  } else {
    navBarUp.style.backgroundColor = "var(--oscuro-transparente)";
    navBarDown.style.backgroundColor = "var(--oscuro-transparente)";
  }
};
//es que no tengo insta :(
const noTengoInstagram = () => alert("¡¡NO TENGO INSTAGRAM!!");

//boton menu celular
function menuCelular() {
  menuBotones.classList.toggle("menu-ham-toogle");

  // estado
  //   ? (menuBotones.style.display = "flex")
  //   : (menuBotones.style.display = "none");
}

addEventListener("scroll", skillsBarAnim);
addEventListener("scroll", navBarAnim);
noInsta.addEventListener("click", noTengoInstagram);
menuHam.addEventListener("click", menuCelular);
