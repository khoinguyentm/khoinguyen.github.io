const topBtn = document.querySelector("#topBtn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 40) {
    // Show button
    topBtn.style.display = "block";
  } else {
    // Show button
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}
