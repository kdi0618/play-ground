document.addEventListener("DOMContentLoaded", function () {
  const fadeInImage = document.querySelector(".fade-in-image");
  const body = document.querySelector("body");

  setTimeout(() => {
    fadeInImage.style.opacity = 1;
  }, 100);

  fadeInImage.addEventListener("transitionend", function () {
    body.style.overflow = "auto";
  });
});
