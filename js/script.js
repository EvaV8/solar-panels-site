function toggleMenu() {
  var menuToggle = document.querySelector(".toggle");
  var navigation = document.querySelector(".navigation");
  var main = document.querySelector(".main-container");
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}
