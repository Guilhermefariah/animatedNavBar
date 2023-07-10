const list = document.querySelectorAll(".list");
const inputContainer = document.querySelector(".input-container");
const search = document.getElementById("search");

search.addEventListener("click", function () {
  inputContainer.style.display = "flex";
});

list.forEach(function (list) {
  list.addEventListener("click", function () {
    if (this !== search) {
      inputContainer.style.display = "none";
    }
  });
});

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
