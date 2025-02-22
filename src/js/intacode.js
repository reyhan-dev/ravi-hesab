document.addEventListener("DOMContentLoaded", function () {
  const taxTableButton = document.querySelector(".button-1");
  const taxFormButton = document.querySelector(".button-2");
  const taxFormArticle = document.querySelectorAll("section > article")[1];
  const taxTableArticle = document.querySelectorAll("section > article")[2];

  taxTableButton.addEventListener("click", function () {
    taxFormArticle.classList.add("hidden");
    taxTableArticle.classList.remove("hidden");
  });

  taxFormButton.addEventListener("click", function () {
    taxTableArticle.classList.add("hidden");
    taxFormArticle.classList.remove("hidden");
  });

  const infoImage = document.querySelector(".modalIcon");
  const infoModal = document.getElementById("infoModal");
  const closeModal = document.getElementById("closeModal");

  infoImage.addEventListener("click", function () {
    infoModal.classList.remove("hidden");
    infoModal.classList.add("flex");
  });

  closeModal.addEventListener("click", function () {
    infoModal.classList.add("hidden");
    infoModal.classList.remove("flex");
  });
});
