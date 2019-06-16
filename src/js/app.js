let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

var lazyLoadInstance = new LazyLoad({
  elements_selector: ".circle, .box__photo, .left-image, .image-up, .image-down, .logo-down"
});