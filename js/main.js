document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector(".logoMenu").classList.toggle("open");
  });
});
