const navbar = document.querySelector(".navbar ul");
const menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("slide");
});

navbar.addEventListener("click", () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("slide");
});

  // gsap.to('.main img',{duration:1,ease:'bounce.out'});
gsap.to('.main img', { duration: 2.5, ease: "bounce.out", y: 70 });

    AOS.init();