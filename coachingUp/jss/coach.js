const topBtn = document.querySelector("#topBtn");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 40) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}
