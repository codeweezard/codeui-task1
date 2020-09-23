const navLink = document.querySelector(".nav-link");
const navBtn = document.querySelector(".nav-btn");
const icon = document.querySelector(".icon");

icon.addEventListener("click", () => {
  navLink.classList.toggle("visible");
  navBtn.classList.toggle("visible");
});
